import { memo } from 'react'

import { useAuth } from 'src/hooks/useAuth'

export const LogoutButton: React.VFC = memo(() => {
  const { logout } = useAuth()
  return (
    <button className="btn-primary" onClick={logout}>
      ログアウト
    </button>
  )
})

LogoutButton.displayName = 'LogoutButton'
