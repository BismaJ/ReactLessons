import React from "react"
import jokesData from "./jokesData.js"

function Joke(props){
    return(
        <div>
            <h3 style={{backgroundColor: "Gray", padding: "5px", display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3 style={{backgroundColor: "white", padding: "15px", color: !props.question && "#888888"}}>Answer: {props.answer}</h3>
            <hr />
        </div>
    )
}

export default Joke