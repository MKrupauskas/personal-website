import NextTypography from 'next-typography'
import typography from '../utils/typography'

import 'typeface-merriweather'
import 'typeface-montserrat'
import '../components/header.css'
import '../components/toggle.css'
import '../utils/global.css'
import '../utils/syntax.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NextTypography typography={typography} />
    </>
  )
}

export default MyApp
