import React from 'react'
import "./SocialNetworks.css"

const SocialNetworks = (props) => {
  return(
    <div className='container'>
      <button> 
        <div className='icon'>{props.icon}</div> 
        <div className='name'>{props.name}</div>
      </button> 
    </div>
    );
}

export default SocialNetworks;