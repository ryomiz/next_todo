import { memo } from 'react'
import { useRecoilValue } from 'recoil'

import { LogoutButton } from './LogoutButton'

import { PrimaryButton } from 'src/components/general/button/PrimaryButton'
import { userInfo } from 'src/stores'

export const LoginPanel: React.VFC = memo(() => {
  const user = useRecoilValue(userInfo)
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
