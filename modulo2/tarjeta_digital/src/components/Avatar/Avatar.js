import React from "react";

const Avatar = (props) =>{
    return(
        <div className="avatar">
            <img src={props.photo}/>
        </div>
    )
}

export default Avatar;