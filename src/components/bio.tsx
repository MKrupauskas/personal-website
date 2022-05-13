import React from 'react'
import { CONFIG } from '../config'
import { rhythm } from '../utils/typography'

function Bio() {
  const { author } = CONFIG

  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <img
        src="/images/profile-pic.jpg"
        loading="lazy"
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: '100%',
          height: 75,
          maxWidth: 75,
          minWidth: 75,
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong>. A passionate software developer
        from Lithuania, currently situated in the Netherlands.
        <em> Helping people create value with technology.</em>
      </p>
    </div>
  )
}

export default Bio
