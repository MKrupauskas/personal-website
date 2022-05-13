import React, { useState } from 'react'
import Button from '../components/button'
import { rhythm } from '../utils/typography'
import { encode } from '../helpers/helpers'

export const inputStyles = {
  width: '100%',
  outline: 'none',
  border: '1px solid var(--primary)',
  padding: rhythm(0.25),
  background: 'var(--bg)',
  color: 'var(--text)',
  borderRadius: '0.25rem',
}

export const styles = {
  inputStyles,
  label: {
    display: 'block',
  },
  textarea: {
    ...inputStyles,
    height: rhythm(3),
    resize: 'none' as const,
  },
}

function Subscribe() {
  const [fields, setFields] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = ({ target }) => {
    setFields({ ...fields, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'email', ...fields }),
    }).then(() => setIsSubmitted(true))
  }

  return (
    <div className={isSubmitted ? 'card-filled card' : 'card'}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>
        Subscribe to not miss out on new content.
      </h3>
      <p style={{ marginBottom: '1rem' }}>
        Keep up with things amazing things happening in <em>technology</em>,{' '}
        <em>business</em>, <em>software</em>, and <em>the web</em>.
      </p>
      {isSubmitted ? (
        <div style={{ fontSize: '1.5rem' }}>
          <em>Thank you for signing up!</em> 😊💛
        </div>
      ) : (
        <form
          name="email"
          method="post"
          data-netlify="true"
          onSubmit={handleSubmit}
          style={{ margin: 0 }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              style={{ ...styles.inputStyles, width: '100%', maxWidth: 'none' }}
              type="email"
              name="email"
              id="email"
              aria-label="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit" style={{ width: '100%' }}>
              Subscribe
            </Button>
            <small>
              You will never receive spam and you can unsubscribe at any time.
            </small>
          </div>
        </form>
      )}
    </div>
  )
}

export default Subscribe
