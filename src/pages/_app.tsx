import '../styles/globals.css'
import type { AppProps } from 'next/app'

import 'react-calendar/dist/Calendar.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
