import React from 'react'

const Button = (props) => (
  <button className="btn" {...props}>
    {props.children}
  </button>
)

export default Button
