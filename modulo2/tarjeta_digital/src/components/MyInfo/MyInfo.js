import React from "react";

const MyInfo = (props) => {

    return(
        <div>
            <h1 className="name">{props.name}</h1>
            <p className="position">{props.position}</p>
            <p className="work">{props.work}</p>
        </div>
    )
}

export default MyInfo;