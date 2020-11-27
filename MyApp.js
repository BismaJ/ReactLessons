import React, {Component} from "react"
import Footer from "./Footer.js"
import MainContent from "./MainContent.js"
import Todoitem from "./Todoitem.js"
import todoData from "./todoData"
import ContactCard from "./ContactCard"
import Joke from "./Joke"
import jokesData from "./jokesData"
import products from "./vschoolProducts"
import Product from "./Product.js"
import Conditional from "./Conditional.js"
import Form from "./Form.js"
import Header from "./Header.js"
import MemeGenerator from "./MemeGenerator"

function MyApp() {
    return(
        <div>
            <Header />
            <MemeGenerator />
            </div>
    )
}

// function MyApp(){
//     return(
//         <Form />
//     )
// }

// class MyApp extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             firstname: "",
//             lastname: "",
//             age: 0,
//             gender: "",
//             destination: "",
//             isVegan: false,
//             isKoshar: false,
//             isLactoseFree: false
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(event){
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ?
//         this.setState({
//             [name]: checked
//         })
//         :
//         this.setState({
//             [name]: value
//         })
//     }
//     render(){
//         return(
//             <main>
//             <form>
//                 <input
//                 type="text"
//                 value={this.state.firstname}
//                 name="firstname"
//                 placeholder="First name"
//                 onChange={this.handleChange}
//                 />
                {/* <br />
                <input
                type="text"
                value={this.state.lastname}
                name="lastname"
                placeholder="last name"
                onChange={this.handleChange}
                />
                <br />
                <input
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                placeholder="Age"
                />
                <br />
                <label>
                    <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                    />Male
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                    />Female
                </label>
                
                <br />
                <select
                value={this.state.destination}
                name="destination"
                onChange={this.handleChange}
                >
                    <option value="">---please choose a destination</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
 
                <br />

                <label>
                    <input
                    type="checkbox"
                    name="isVegan"
                    onChange={this.handleChange}
                    checked={this.state.isVegan}
                    />Vegan?
                </label>
                <br /> 

                 <label>
                    <input
                    type="checkbox"
                    name="isKoshar"
                    onChange={this.handleChange}
                    checked={this.state.isKoshar}
                    /> Koshar?
                </label>
                <br />

                <label>
                    <input
                    type="checkbox"
                    name="isLactoseFree"
                    onChange={this.handleChange}
                    checked={this.state.isLactoseFree}
                    /> Lactose free?
                </label> */}

                {/* <button>Submit</button>
                 </form>
                 <hr />
                 <h2>Entered information</h2>
                 <p>Your name: {this.state.firstname} {this.state.lastname}</p>
                 <p>Your age: {this.state.age}</p>
                 <p>Your gender: {this.state.gender}</p>
                 <p>Your destination: {this.state.destination}</p>
                 <p>Your dietary restriction:</p>
                 <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                 <p>Koshar: {this.state.isKoshar ? "Yes" : "No"}</p>
                 <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
                     
            </main>
            
        )
    }
} */}
   
//
// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }
//     componentDidMount(){
//         this.setState({loading: true})
//         fetch("https://swapi.dev/api/people/1/")
//         .then(response => response.JSON())
//         .then(data => {
//             this.setState({
//                 loading: false,
//                 character: data
//             })
//         })
//     }
//     render(){
//         const text = this.state.loading ? "loading..." : this.state.character.name
//         return(
//             <div>
//                 <p>{text}</p>
//                 </div>
//         )
//     }
// }


// class MyApp extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState(prevState => {
//             return{
//             isLoggedIn : !prevState.isLoggedIn
//             }
//         })
//     }

//     render(){
//         let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//         let displayText = this.state.isLoggedIn ? "LOGGED IN" : "LOGGED OUT"
//         return(
//             <div>
//                 <button onClick={this.handleClick}>{buttonText}</button>
//                 <h2>{displayText}</h2>
//             </div>
//         )
//     }
// }

// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             unreadMessages : ["a", "b", "c", "d", "e"],
//             readMessages : ["w", "x", "y", "z"]
//         }
//     }
//     render(){
//         return(
//             <div>{
//                 this.state.unreadMessages.length > 0 &&
//                 <h1>You've {this.state.unreadMessages.length} messages!</h1>}
//                 <h1>You've {this.state.readMessages.length} messages!</h1>
//                 <h1>You've total {this.state.unreadMessages.length * this.state.readMessages.length} messages!</h1>
//                 </div>
//         )
//  }
// }


// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             unreadMessages: ["hi", "hello", "bonjour", "hola"],
//             readMessages: ["good", "done", "tired", "later"]
//         }
//     }
//     render(){
//         return(
//             <div>{
//                 this.state.unreadMessages.length > 0 &&
//                 <h2>You've {this.state.unreadMessages.length} unread messages!</h2>}
//                 <h2>You've {this.state.readMessages.length} read messages!</h2>
//                 <h2>You've total {this.state.unreadMessages.length * this.state.readMessages.length} messages!</h2>
//     </div>
//         )
//     }
// }


// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             isLoading: true
//         }
//     }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 2500)
    // }
    // render(){
    //     return(
    //         <div>
    //                 {this.state.isLoading ?
    //                 <h1>hooaah!</h1> :
    //                 <Conditional />      
    //             }
    //         </div>
    //     )
    // }
// }


// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             isLoading: true
//         }
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         }, 2500)
//     }
//     render(){
//         return (
//             <div>
//                 <Conditional isLoading={this.state.isLoading}/>
//             </div>
//         )
//     }
// }



// add one and minus one in your state

// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//         this.AddClick = this.AddClick.bind(this)
//         this.MinusClick = this.MinusClick.bind(this)
//     }
//         AddClick(){
//                 this.setState(prevState => {
//                     return{
//                         count: prevState.count + 1
//                     }
//                 })
//             }
//         MinusClick(){
//             this.setState(prevState => {
//                 return{
//                     count: prevState.count - 1
//                 }
//             })
//         }
        // render(){
        //     return(
        //         <div>
        //             <h1>{this.state.count}</h1>
        //             <button onClick={this.AddClick} style={{padding: "20px", margin: "10px"}}>Add</button>
        //             <button onClick={this.MinusClick} style={{padding: "20px", margin: "10px"}}>Minus</button>
        //         </div>
        //     )
        // }
        // }


// change count state

// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//             <button>Change</button>
//             </div>
//         )
//     }
// }

// function HandleClick(){
//     document.write("I was clicked")
// }

// function MyApp() {
//     return(
//         <div>
//             <img onMouseOver={() => document.write("Hovered!g")} src=".\images\coffee.jpg" />
//             <br />
//             <br />
//             <button onClick={HandleClick}> Click me!</button>
//         </div>
//     )
// }


// add values todo

// class MyApp extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         todos: [],
//         value: ''
//       }
//     }
//     onAddTodo = () => {
//       if(this.state.value === '') {
//         return;
//       }
//       const newTodos = this.state.todos.slice(0);
//       newTodos.push(this.state.value);
//       this.setState({
//         todos: newTodos,
//         value: ''
//       })
//     }
//     onInputHandler = (e) => {
//       this.setState({
//         value: e.target.value
//       })
//     }
//     render() {
//      console.log(this.state.todos)
//       return (<div style={{padding: "20px"}}>
//           <h3>Add names here</h3>
//         <input  type="text" value ={this.state.value} onChange={this.onInputHandler} />
//         <button onClick={this.onAddTodo}>Add</button>
//         <ul>
//         {this.state.todos.map((todo,index) => {
//           return  <li key={index}>{todo}</li>
//         })
//       }
//         </ul>
//       </div>)
//     }
//   }
    

// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             todos: todoData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//         handleChange(id){
//             this.setState(prevState => {
//                 const updatedTodo = this.state.todos.map(todo => {
//                     if(todo.id === id){
//                         todo.completed = !todo.completed
//                     }
//                     return todo
//                 })
//                 return{
//                     todos: updatedTodo
//                 }
//             })
//         }
//         render(){
//             const Todoitems = todoData.map(item => <Todoitem key={item.id} item={item} handleChange={this.handleChange} />)
//             return(
//                 <div>
//                     <h1>{Todoitems}</h1>
//                 </div>
//             )
//         }
// }




// class MyApp extends Component {
//     constructor(){
//         super()
//         this.state = {
//             todos: todoData
//         }
//     }
//     render(){
//         const todoItems = this.state.todos.map(item => <Todoitem key={item.id} item={item} />)
//         return(
//             <div className="todo-list">
//                 <h1>
//                     {todoItems}
//                 </h1>
//             </div>
//         )
//     }
// }

// class MyApp extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             todos: todoData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//         handleChange(id){
//             this.setState(prevState => {
//                 const updatedTodo = prevState.todos.map(todo => {
//                     if(todo.id === id){
//                         todo.completed = !todo.completed
//                     }
//                     return todo
//                 })
//                 return {
//                     todos: updatedTodo
//                 }
//             })
//         }

//         render(){
//             const todoItems = this.state.todos.map(item => <Todoitem key={item.id} item={item} handleChange={this.handleChange} />)
//             return(
//                 <div className="todo-list">
//                     <h1>{todoItems}</h1>
//                 </div>
//             )
//         }
// }


// class MyApp extends Component {
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn : false
//         }
//     }
//     render(){
//         let wordDisplay
//         if(this.state.isLoggedIn === false){
//             wordDisplay = "out"
//         } else {
//             wordDisplay = "in"
//         }
//         return(
//             <div>
//                 <h1>You are currently Logged {wordDisplay}</h1>
//             </div>
//         )
//     }
// }
    



// class MyApp extends Component{
//     constructor(){
//         super()
//         this.state = {
//             name: "bisma",
//             age: 9
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>my name is {this.state.name}</h1>
//                 <h1>I am {this.state.age} years old!</h1>
//             </div>
//         )
//     }
// }
    


// class MyApp extends React.Component {
//     render(){
//         return (
//             <div>
//                 <Header username="Bismaa"/>
//                 <Greeting />
//             </div>
//         )
//     }
    
// }

// class Header extends React.Component{
//     render(){
//         return(
//             <header>
//                 <p>Welcome {this.props.username}</p>
//             </header>
    
//         )
//     }
// }

// class Greeting extends Component{
//     render(){
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay
//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17){
//             timeOfDay = "afternoon"
//         } else{
//             timeOfDay = "night"
//         }
//     return(
//         <div>
//             <h3>Good {timeOfDay} to you, Bisma</h3>
//         </div>
//     )
// }
// }











// function MyApp(){

//     const todoItems = todoData.map(item => <Todoitem item={item}/>)

    // const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
    
    // const productsComponent = products.map(products => <Product key={products.id} product={products} />)

//     return(
//         <div className="todo-list">
//             {todoItems}
//             {/* {jokeComponents}
//             {productsComponent} */}
//             </div>
//     )
// }

// class MyApp extends React.Component{
//     myMethod(){

//     }
//     render(){
//         const style = this.myMethod()
//         return(
//             <div>
//                 <h1>Class goes here</h1>
//             </div>
//         )
        
//     }
// }

export default MyApp

    
   

        





