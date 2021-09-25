import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Techbit from '../components/techbits'
import { rhythm } from '../utils/typography'

const TechbitsPage = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const techbits = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo title="Techbits" />
      <h1>Techbits</h1>
      <div style={{ marginBottom: rhythm(1) }}>
        {techbits.map((techbit, index) => (
          <Techbit key={index} techbit={techbit} />
        ))}
      </div>
    </Layout>
  )
}

export default TechbitsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(techbits)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tech
          }
        }
      }
    }
  }
`
