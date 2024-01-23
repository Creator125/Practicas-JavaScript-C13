import React from 'react'

const AboutMe = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
    </div>
  )
}

export default AboutMe;