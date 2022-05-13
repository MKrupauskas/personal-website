import Link from 'next/link'
import React from 'react'
import Bio from '../../components/bio'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Subscribe from '../../components/subscribe'
import { TECHBITS_PATH } from '../../content/constants'
import { fetchPaths, fetchPost } from '../../content/posts'
import {
  formatDate,
  formatminsToRead,
  markdownToHTML,
} from '../../helpers/helpers'
import { rhythm, scale } from '../../utils/typography'

function Techbit({ techbit, pageContext }) {
  const { previous, next } = pageContext ?? {}

  return (
    <Layout>
      <Seo title={techbit.data.title} description={techbit.data.description} />
      <h1>{techbit.data.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {formatDate(new Date(techbit.data.date))} •{' '}
        {formatminsToRead(techbit.minsToRead)} min read
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownToHTML(techbit.content),
        }}
      />
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

export default Techbit

export async function getStaticPaths() {
  const paths = await fetchPaths(TECHBITS_PATH)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params?.slug
  const techbit = await fetchPost(TECHBITS_PATH, slug)
  return {
    props: {
      techbit,
    },
  }
}
