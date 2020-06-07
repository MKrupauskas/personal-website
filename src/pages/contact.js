import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { navigateTo } from 'gatsby-link'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'

import { rhythm } from '../utils/typography'

import { encode } from '../helpers/helpers'

const inputStyles = {
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
    resize: 'none',
  },
}

const Contact = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

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
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Contact" />
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
