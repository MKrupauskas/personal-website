import React, { useState } from 'react'

import Button from '../components/button'

import { rhythm } from '../utils/typography'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const inputStyles = {
  maxWidth: 300,
  width: '100%',
  outline: 'none',
  border: '1px solid black',
  padding: rhythm(0.25),
}

const styles = {
  label: {
    display: 'block',
  },
  textarea: {
    ...inputStyles,
    height: rhythm(3),
    resize: 'none',
  },
}

function Email() {
  const [fields, setFields] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = ({ target }) => {
    setFields({ ...fields, [target.name]: target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'email', ...fields }),
    }).then(() => setIsSubmitted(true))
  }

  if (isSubmitted) {
    return <div>You've successfully signed up!</div>
  }

  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <label style={styles.label}>Email</label>
          <input
            style={inputStyles}
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type="submit">Sign up!</Button>
        </div>
      </form>
    </div>
  )
}

export default Email
