import React from "react";

function Welcome(props) {
    console.log(props)
    return <h1>Hola, {props.name}</h1>
}


//const element = <Welcome name = "Mario" />

export default Welcome;

