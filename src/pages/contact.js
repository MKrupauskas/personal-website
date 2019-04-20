import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { navigateTo } from 'gatsby-link'

import Layout from '../components/layout'
import SEO from '../components/seo'
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

const Contact = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  const [fields, setFields] = useState({})

  const handleChange = ({ target }) => {
    setFields({ ...fields, [target.name]: target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
      .then(() => navigateTo('/'))
      .catch(error => alert(error))
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
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
          <label style={styles.label}>Message</label>
          <textarea
            style={styles.textarea}
            name="message"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type="submit">Send</Button>
        </div>
      </form>
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
