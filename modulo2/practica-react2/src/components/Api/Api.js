import Axios from 'axios';
import ShowAlert from '../Alert/Alert';
import React, { useState } from 'react';
import "./Api.css"

const Api = () => {
    const [joke, setJoke] = useState("");
    const getJoke = () =>{
        Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
            setJoke(response.data.setup+"..."+response.data.punchline)
            if (response.data.setup === "") {
                ShowAlert(
                  "top-end",
                  "error",
                  "Error!",
                  "The request could not be processed",
                  2000
                );
              } else {
                ShowAlert(
                  "top-end",
                  "success",
                  "Success!",
                  "Joke successfully requested",
                  2000
                );
              }
            })
            .catch((error) => {
                ShowAlert(
                "top-end",
                "error",
                "Error!",
                "The request could not be processed",
                2000
              );
        })
    }

    return (
    <div className='Api'>
        <h1>Hello word</h1>
        <button onClick={getJoke}>Get a joke right now!</button>
        <p>{joke}</p>
    </div>
    )
}

export default Api