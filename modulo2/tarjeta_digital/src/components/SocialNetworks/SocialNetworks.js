import React from 'react'

const SocialNetworks = (props) => {
  return <button> <img src={props.icon}/> {props.name}</button>
}

export default SocialNetworks;