import React from 'react'

import Footer from './footer'
import Header from './header'

import { rhythm } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { title, children, isLargeHeader } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header title={title} isLarge={isLargeHeader} />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
