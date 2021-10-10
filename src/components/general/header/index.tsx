import Link from 'next/link'
import { memo } from 'react'

import { HeaderNavi } from './parts/HeaderNavi'
import { LoginPanel } from './parts/LoginPanel'

export const Header: React.VFC = memo(() => {
  return (
    <header className="bg-ping-500 mb-8 px-2 py-4 shadow">
      <div className="flex items-center justify-between mx-auto max-w-screen-lg font-bold">
        <Link href="/">
          <a className="text-3xl">NEXT TODO</a>
        </Link>
        <nav className="flex gap-16 items-center">
          <HeaderNavi />
          <LoginPanel />
        </nav>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
