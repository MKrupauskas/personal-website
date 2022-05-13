import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Techbit from '../components/techbits'
import { TECHBITS_PATH } from '../content/constants'
import { fetchPosts } from '../content/posts'
import { rhythm } from '../utils/typography'

const TechbitsPage = ({ techbits }) => {
  return (
    <Layout>
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

export async function getStaticProps(context) {
  const techbits = await fetchPosts(TECHBITS_PATH)
  return {
    props: {
      techbits,
    },
  }
}
