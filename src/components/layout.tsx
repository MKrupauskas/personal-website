import { rhythm } from '../utils/typography'
import Footer from './footer'
import Header from './header'

function Layout(props) {
  const { children, isLargeHeader } = props

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header isLarge={isLargeHeader} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
