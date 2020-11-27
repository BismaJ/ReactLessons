import React from "react"

function FormComponent(props){
    return(
        <main>
            <form>
                <input
                    name="firstname"
                    value= {props.data.firstname}
                    onChange= {props.handleChange}
                    placeholder= "First Name"
                />
                <br />
                <input
                    name="lastname"
                    value= {props.data.lastname}
                    onChange= {props.handleChange}
                    placeholder= "Last Name"
                />
                <br />
                <input
                    name= "age"
                    value= {props.data.age}
                    onChange= {props.handleChange}
                    placeholder= "Age"
                />
                <br />
                <label>
                    <input
                        type= "radio"
                        name= "gender"
                        value= "male"
                        checked= {props.data.gender === "male"}
                        onChange= {props.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type= "radio"
                        name= "gender"
                        value= "female"
                        checked= {props.data.gender === "female"}
                        onChange= {props.handleChange}
                    /> Female
                </label>
                <br />
                <select
                    value= {props.data.destination}
                    name= "destination"
                    onChange= {props.handleChange}
                >
                        <option value="">--Please choose a destination</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="greece">Greece</option>
                        <option value="egypt">Egypt</option>
                    </select>
                    <br />
                    
                    <label>
                        <input
                        type= "checkbox"
                        name= "isVegan"
                        onChange= {props.handleChange}
                        checked= {props.data.isVegan}
                        /> Vegan?
                    </label>
                    <br />
                    <label>
                        <input
                        type= "checkbox"
                        name= "isKoshar"
                        onChange= {props.handleChange}
                        checked= {props.data.isKoshar}
                        /> Koshar?
                    </label>
                    <br />
                    <label>
                        <input
                        type= "checkbox"
                        name= "isLactoseFree"
                        onChange= {props.handleChange}
                        checked= {props.data.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered Information</h2>
                <p>Your name is: {props.data.firstname} </p>
                <p>{props.data.lastname}</p>
                <p>Your age is: {props.data.age}</p>
                <p>Your gender is: {props.data.gender}</p>
                <p>Your destination is: {props.data.destination}</p>
                <p>Your dietary restrictions are: </p>
                <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                <p>Koshar: {props.data.isKoshar ? "Yes" : "No"}</p>
                <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>

            </main>
    )
}

export default FormComponent