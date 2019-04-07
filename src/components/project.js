import React from 'react'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

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

const Project = ({ project }) => (
  <div style={styles.container}>
    <Image
      style={styles.image}
      fixed={project.node.frontmatter.image.childImageSharp.fixed}
    />
    <div style={styles.info}>
      <h3 style={styles.title}>
        <a
          style={{ boxShadow: 'none' }}
          rel="noopener noreferrer"
          target="_blank"
          href={project.node.frontmatter.link}
        >
          {project.node.frontmatter.title}
        </a>
      </h3>
      <small>Technology: {project.node.frontmatter.tech.join(', ')}</small>
      <p style={{ marginBottom: 0 }}>{project.node.frontmatter.description}</p>
    </div>
  </div>
)

export default Project
