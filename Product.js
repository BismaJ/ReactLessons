import React from "react"
import products from "./vschoolProducts.js"

function Product(props){
    return(
        <div>
            <h3 style={{backgroundColor: "Highlight", padding: "15px", }}>{props.product.name}</h3>
            <p style={{backgroundColor: "wheat", padding: "15px", color: "orangered"}}>{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})} - {props.product.description}</p>
        </div>
    )
}

export default Product