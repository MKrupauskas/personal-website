import React from 'react'

const Button = props => (
  <button
    style={{
      border: `2px solid var(--primary)`,
      color: 'var(--primary)',
      background: 'transparent',
    }}
    {...props}
  >
    {props.children}
  </button>
)

export default Button
