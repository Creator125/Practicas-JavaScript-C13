import React from 'react'
import "./AboutMe.css"

const AboutMe = (props) => {
  return (
    <div className='about-me'>
        <h2 className='title'>{props.title}</h2>
        <p className='info'>{props.info}</p>
    </div>
  )
}

export default AboutMe;