import Link from 'next/link'
import React from 'react'
import Bio from '../../components/bio'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Subscribe from '../../components/subscribe'
import { BLOG_POST_PATH } from '../../content/constants'
import { fetchPaths, fetchPost } from '../../content/posts'
import {
  formatDate,
  formatminsToRead,
  markdownToHTML,
} from '../../helpers/helpers'
import { rhythm, scale } from '../../utils/typography'

const BlogPost = ({ post, pageContext }) => {
  const { previous, next } = pageContext ?? {}

  return (
    <Layout>
      <Seo title={post.data.title} description={post.data.description} />
      <h1>{post.data.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {formatDate(new Date(post.data.date))} •{' '}
        {formatminsToRead(post.minsToRead)} min read
      </p>
      <div dangerouslySetInnerHTML={{ __html: markdownToHTML(post.content) }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      <Subscribe />

      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link href={previous.fields.slug} rel="prev">
              <a>← {previous.frontmatter.title}</a>
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link href={next.fields.slug} rel="next">
              <a>{next.frontmatter.title} →</a>
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPost

export async function getStaticPaths() {
  const paths = await fetchPaths(BLOG_POST_PATH)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params?.slug
  const post = await fetchPost(BLOG_POST_PATH, slug)
  return {
    props: {
      post,
    },
  }
}
