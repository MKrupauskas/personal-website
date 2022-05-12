import React from 'react'

import { rhythm } from '../utils/typography'
import Link from 'next/link'
import { formatDate } from '../helpers/helpers'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: rhythm(2),
  },
  image: {
    marginRight: rhythm(0.5),
    marginBottom: rhythm(0.5),
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

const Techbit = ({ techbit }) => (
  <div style={styles.container}>
    <div style={styles.info}>
      <h3 style={styles.title}>
        <Link href={`/techbit/${techbit.slug}`}>
          <a style={{ boxShadow: 'none' }}>{techbit.data.title}</a>
        </Link>
      </h3>
      <small>
        {formatDate(new Date(techbit.data.date))} •{' '}
        {techbit.data.tech.join(', ')}
      </small>
      <p style={{ marginBottom: 0 }}>{techbit.data.description}</p>
    </div>
  </div>
)

export default Techbit
