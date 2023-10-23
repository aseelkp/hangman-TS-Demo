import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./Components/HangmanDrawing";
import HangmanWord from "./Components/HangmanWord";
import Keyboard from "./Components/Keyboard/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  const incorrectLetters = guessedLetter.filter((letter) => {
    return !wordToGuess.includes(letter);
  });

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter) || isWinner || isLoser) return;
      setGuessedLetter((prev) => [...prev, letter]);
    },
    [guessedLetter, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetter([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isLoser
          ? "You lost! - Refresh the page to play again. "
          : isWinner
          ? "You won! -Refresh the page to play again. "
          : "Keep guessing!"}
      </div>
      <HangmanDrawing numberOfWrongGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetter={guessedLetter} wordToGuess={wordToGuess} reveal= {isLoser} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
