import React from "react";

const fruits = ["Manzana", "Mango", "Pera"];

function Welcome(props) {
    console.log(props)
    return(
    <React.Fragment>
        <h1>Hola, {props.name}</h1>

        <ul>
            {fruits.map((fruits, index) =>(
                <li key={index}>{fruits}</li>
            ))}
        </ul>
    </React.Fragment>
    )
}


//const element = <Welcome name = "Mario" />

export default Welcome;

