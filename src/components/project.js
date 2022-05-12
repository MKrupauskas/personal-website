import React from 'react'
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
    maxWidth: 200,
    height: '100%',
    objectFit: 'contain',
    imageRendering: '-webkit-optimize-contrast',
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
    <img style={styles.image} src={project.data.image} />
    <div style={styles.info}>
      <h3 style={styles.title}>
        <a
          style={{ boxShadow: 'none' }}
          rel="noopener noreferrer"
          target="_blank"
          href={project.data.link}
        >
          {project.data.title}
        </a>
      </h3>
      <small>Technology: {project.data.tech.join(', ')}</small>
      <p style={{ marginBottom: 0 }}>{project.data.description}</p>
    </div>
  </div>
)

export default Project
