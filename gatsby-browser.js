// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// prismjs syntax highlighting
import 'prismjs/themes/prism-solarizedlight.css'

// error logging
import * as Sentry from '@sentry/browser'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://6b377ceb129d49e789903556b0808cbe@sentry.io/1486761',
  })
}
