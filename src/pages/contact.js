import React, { useState } from 'react'
import Button from '../components/button'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { inputStyles, styles } from '../components/subscribe'
import { encode } from '../helpers/helpers'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fields, setFields] = useState({})

  const handleChange = ({ target }) => {
    setFields({ ...fields, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    }).then(() => {
      setFields({})
      setIsSubmitted(true)
    })
  }

  return (
    <Layout>
      <Seo title="Contact" />
      <div className={isSubmitted ? 'card card-filled' : 'card'}>
        <h1 style={{ margin: '0 0 1rem 0' }}>Contact</h1>
        <p>
          I can also be reached via social media or by email at{' '}
          <a
            href="mailto:mkrupauskas@gmail.com"
            style={{ color: 'var(--text)' }}
          >
            mkrupauskas@gmail.com
          </a>
        </p>
        <form
          name="contact"
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
              style={inputStyles}
              id="email"
              type="email"
              name="email"
              aria-label="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={styles.label}>
              Message
            </label>
            <textarea
              style={styles.textarea}
              id="message"
              name="message"
              aria-label="Message"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit" style={{ width: '100%' }}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
