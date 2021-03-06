import React from 'react'
import { Link } from 'gatsby'

import Toggle from './toggle'

import { rhythm } from '../utils/typography'

import './header.css'

const HeaderTitle = ({ title, isLarge }) => {
  return (
    <h3 className={`logo ${isLarge ? 'logo--large' : ''}`}>
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

const Header = ({ title, isLarge }) => {
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
        <HeaderTitle title={title} isLarge={isLarge} />
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
