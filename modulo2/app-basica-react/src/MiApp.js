import React from "react";

class MyApp extends React.Component{
    constructor (props){
        super(props);
        this.state ={
            x: "Este es x desde estado",
            y: "Este es y desde estado"
        }
    }

    render(){
        return(
            <div className="MyApp">
                <h2>{this.state.x}</h2>
                <h2>{this.state.y}</h2>
            </div>
        )
    }
}