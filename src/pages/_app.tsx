import '../styles/globals.css'
import 'react-calendar/dist/Calendar.css'
import 'react-responsive-modal/styles.css'

import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

import { useToast } from 'src/hooks/useToast'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { MyToaster } = useToast()

  return (
    <RecoilRoot>
      <MyToaster />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
