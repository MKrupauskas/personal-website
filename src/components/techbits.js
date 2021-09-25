import React from 'react'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: rhythm(2),
  },
  image: {
    marginRight: rhythm(0.5),
    marginBottom: rhythm(0.5),
  },
  title: {
    marginTop: 0,
    marginBottom: rhythm(1 / 4),
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minWidth: 200,
  },
}

const Techbit = ({ techbit }) => (
  <div style={styles.container}>
    <div style={styles.info}>
      <h3 style={styles.title}>
        <Link style={{ boxShadow: 'none' }} to={techbit.node.fields.slug}>
          {techbit.node.frontmatter.title}
        </Link>
      </h3>
      <small>
        {techbit.node.frontmatter.date} •{' '}
        {techbit.node.frontmatter.tech.join(', ')}
      </small>
      <p style={{ marginBottom: 0 }}>{techbit.node.frontmatter.description}</p>
    </div>
  </div>
)

export default Techbit
