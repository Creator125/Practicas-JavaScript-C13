import React from "react";
import "./MyInfo.css"
const MyInfo = (props) => {

    return(
        <div className="my-info">
            <h1 className="name">{props.name}</h1>
            <p className="position">{props.position}</p>
            <p className="work">{props.work}</p>
        </div>
    )
}

export default MyInfo;