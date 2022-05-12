import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <h1>Not Found</h1>
      <p>Whoops, nothing exists on this page yet.</p>
    </Layout>
  )
}

export default NotFoundPage
