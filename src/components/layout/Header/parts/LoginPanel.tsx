import { memo } from 'react'

import { LogoutButton } from './LogoutButton'

import { PrimaryButton } from 'src/components/general/button/PrimaryButton'
import { useAuth } from 'src/hooks/useAuth'

export const LoginPanel: React.VFC = memo(() => {
  const { user } = useAuth()
  return (
    <>
      {user ? (
        <div className="flex gap-4 items-center">
          <div className="text-sm">こんにちは、{user.username}さん</div>
          <LogoutButton />
        </div>
      ) : (
        <>
          <PrimaryButton href="/login">ログイン</PrimaryButton>
        </>
      )}
    </>
  )
})

LoginPanel.displayName = 'LoginPanel'
