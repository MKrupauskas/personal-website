import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'
import Seo from '../components/seo'
import { PROJECTS_PATH } from '../content/constants'
import { fetchPosts } from '../content/posts'
import { rhythm } from '../utils/typography'

const ProjectPage = ({ projects }) => {
  return (
    <Layout>
      <Seo title="Projects" />
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

export async function getStaticProps(context) {
  const projects = await fetchPosts(PROJECTS_PATH)
  return {
    props: {
      projects,
    },
  }
}
