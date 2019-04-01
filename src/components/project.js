import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

const Project = ({ project }) => (
  <div>
    <Image fixed={project.node.frontmatter.image.childImageSharp.fixed} />
    <h3>
      <Link style={{ boxShadow: `none` }} to="/">
        {project.node.frontmatter.title}
      </Link>
    </h3>
  </div>
)

export default Project
