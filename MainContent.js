import React from "react"

function MainContent(){

    const firstname = "Bisma"
    const lastname = "Jamil"
    const city = "karachi"
    const color1 = "black"
    const color2 = "white"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: "30px"
        }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
        styles.backgroundColor = "#D3D3D3"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }

    
    return(
        <div>
            <h1 style={{color: "#FFF222"}}>My name is {firstname} and My father's name is {lastname}</h1>
            <h2>and I live in {city} </h2>
            <p style={{color: "#FF8C00"}}>listen to me my fav color is {`${color1} ${color2}`}</p>
            <p>It is currently {date.getHours() % 12} o'clock!</p>
            <h4 style={styles}>Good {timeOfDay}!</h4>
        </div>
    )
}

export default MainContent