import React from 'react'

import { BRAND_COLOR } from '../utils/typography'

const Button = props => (
  <button
    style={{
      border: `2px solid ${BRAND_COLOR}`,
      color: BRAND_COLOR,
      background: 'transparent',
    }}
    {...props}
  >
    {props.children}
  </button>
)

export default Button
