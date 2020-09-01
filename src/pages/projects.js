import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'

import { rhythm } from '../utils/typography'

const ProjectPage = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <div style={{ marginBottom: rhythm(1) }}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            link
            tech
            image {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
