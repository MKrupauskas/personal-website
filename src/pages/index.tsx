import Link from 'next/link'
import React from 'react'
import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Subscribe from '../components/subscribe'
import { BLOG_POST_PATH } from '../content/constants'
import { fetchPosts } from '../content/posts'
import { formatDate, formatminsToRead } from '../helpers/helpers'
import { rhythm } from '../utils/typography'

const BlogIndex = ({ posts }) => {
  return (
    <Layout isLargeHeader>
      <Seo
        title="All posts"
        keywords={[`blog`, `nextjs`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link href={`/blog/${post.slug}`}>
                <a style={{ boxShadow: `none` }}>{post.data.title}</a>
              </Link>
            </h3>
            <small>
              {formatDate(new Date(post.data.date))} •{' '}
              {formatminsToRead(post.minsToRead)} min read
            </small>
            <p
              dangerouslySetInnerHTML={{
                __html: post.data.description,
              }}
            />
          </div>
        )
      })}

      <Subscribe />
    </Layout>
  )
}

export default BlogIndex

export async function getStaticProps(context) {
  const posts = await fetchPosts(BLOG_POST_PATH)
  return {
    props: {
      posts,
    },
  }
}
