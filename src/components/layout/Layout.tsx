import { MyToaster } from '../general/toaster/MyToaster'

import { Footer } from './Footer'

import { Header } from 'src/components/general/header'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <>
      <MyToaster />
      <Header />
      <div className="mx-auto max-w-screen-lg">{children}</div>
      <Footer />
    </>
  )
}
