import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

const HeaderTitle = ({ title }) => {
  return (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to="/"
      >
        {title}
      </Link>
    </h3>
  )
}

const Header = ({ location, title }) => {
  return (
    <header style={{ marginBottom: rhythm(2) }}>
      <HeaderTitle location={location} title={title} />
      <nav>
        <Link style={{ boxShadow: 'none' }} to="/">
          Blog
        </Link>
        {' • '}
        <Link style={{ boxShadow: 'none' }} to="/projects">
          Projects
        </Link>
        {' • '}
        <Link style={{ boxShadow: 'none' }} to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
