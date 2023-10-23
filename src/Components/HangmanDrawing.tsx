import React from 'react'


const HEAD = (
    <div style={{
        position:"absolute",
        height:"50px",
        width:"50px",
        borderRadius:"50%",
        border:"10px solid black",
        top:"50px",
        right:"-30px",
    }} />
        
)
const BODY = (
    <div style={{
        position:"absolute",
        height:"100px",
        width:"10px",
        background:"black",
        top:"120px",
        right:"0px",
    }} />
        
)
const RIGHT_ARM = (
    <div style={{
        position:"absolute",
        width:"100px",
        height:"10px",
        background:"black",
        top:"150px",
        right:"-100px",
        rotate:"-30deg",
        transformOrigin:"bottom left"

    }} />
        
)
const LEFT_ARM = (
    <div style={{
        position:"absolute",
        width:"100px",
        height:"10px",
        background:"black",
        top:"150px",
        right:"10px",
        rotate:"30deg",
        transformOrigin:"right bottom" 
    }} />
        
)
const RIGHT_LEG = (
    <div style={{
        position:"absolute",
        width:"100px",
        height:"10px",
        background:"black",
        top:"210px",
        right:"-90px",
        rotate:"30deg",
        transformOrigin:"left bottom" 
    }} />
        
)
const LEFT_LEG = (
    <div style={{
        position:"absolute",
        width:"100px",
        height:"10px",
        background:"black",
        top:"210px",
        right:"0px",
        rotate:"-30deg",
        transformOrigin:"right bottom" 
    }} />
)

const BODY_PARTS = [
    HEAD,
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG,
]

type HangmanDrawingProps = {
    numberOfWrongGuesses : number ;
}
const HangmanDrawing = ({numberOfWrongGuesses} : HangmanDrawingProps) => {
  return (
    <div style={{
        position:"relative",
    }}>
        {
            BODY_PARTS.slice(0,numberOfWrongGuesses)
        }
        <div style={{
            position:"absolute",
            height:"50px",
            width:"10px",
            top:0,
            right:0,
            backgroundColor:"black",
        }} />
        <div style={{
            height:"10px",
            width:"200px",
            backgroundColor:"black",
            marginLeft:"120px",
        }} />
        <div style={{
            height:"400px",
            width:"10px",
            backgroundColor:"black",
            marginLeft:"120px",
        }} />
        <div style={{
            height:"10px",
            width:"250px",
            backgroundColor:"black",
        }} />
    </div>
  )
}

export default HangmanDrawing