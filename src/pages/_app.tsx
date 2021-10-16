import '../styles/globals.css'
import 'react-calendar/dist/Calendar.css'
import 'react-responsive-modal/styles.css'

import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
