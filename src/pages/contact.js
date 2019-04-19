import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'

import { rhythm } from '../utils/typography'

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

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label style={styles.label}>Email</label>
          <input style={inputStyles} type="email" name="email" required />
        </div>
        <div>
          <label style={styles.label}>Message</label>
          <textarea style={styles.textarea} name="message" required />
        </div>
        <div data-netlify-recaptcha="true" />
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
