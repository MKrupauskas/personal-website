import NextTypography from 'next-typography'
import typography from '../utils/typography'
import Script from 'next/script'

import 'typeface-merriweather'
import 'typeface-montserrat'
import '../components/header.css'
import '../components/toggle.css'
import '../utils/global.css'
import '../utils/syntax.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7049G3H0TP"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7049G3H0TP');
        `}
      </Script>

      <Component {...pageProps} />
      <NextTypography typography={typography} />
    </>
  )
}

export default MyApp
