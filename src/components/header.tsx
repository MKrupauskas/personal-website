import React from 'react'
import Link from 'next/link'

import Toggle from './toggle'

import { rhythm } from '../utils/typography'
import { CONFIG } from '../config'

const HeaderTitle = ({ isLarge }) => {
  return (
    <h3 className={`logo ${isLarge ? 'logo--large' : ''}`}>
      <Link href="/">
        <a
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
        >
          {CONFIG.title}
        </a>
      </Link>
    </h3>
  )
}

const Header = ({ isLarge }) => {
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
        <HeaderTitle isLarge={isLarge} />
        <Link href="/">
          <a style={{ boxShadow: 'none' }}>Blog</a>
        </Link>
        {' • '}
        <Link href="/techbits">
          <a style={{ boxShadow: 'none' }}>Techbits</a>
        </Link>
        {' • '}
        <Link href="/projects">
          <a style={{ boxShadow: 'none' }}>Projects</a>
        </Link>
        {' • '}
        <Link href="/contact">
          <a style={{ boxShadow: 'none' }}>Contact</a>
        </Link>
      </nav>
      <Toggle />
    </header>
  )
}

export default Header
