import React from 'react'
import { Link } from 'gatsby'

import Toggle from './toggle'

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

const Header = ({ title }) => {
  return (
    <header
      style={{
        marginBottom: rhythm(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <nav>
        <HeaderTitle title={title} />
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
      <Toggle />
    </header>
  )
}

export default Header
