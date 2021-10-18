import { memo } from 'react'

export const Footer: React.VFC = memo(() => {
  return (
    <footer className="text-center">
      <small>&copy; {new Date().getFullYear()} Ryosuke Mizuno</small>
    </footer>
  )
})

Footer.displayName = 'Footer'
