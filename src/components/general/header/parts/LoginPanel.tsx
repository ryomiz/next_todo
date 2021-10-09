import { useRecoilValue } from 'recoil'

import { LogoutButton } from './LogoutButton'

import { PrimaryButton } from 'src/components/general/button/PrimaryButton'
import { userInfo } from 'src/stores'

export const LoginPanel: React.VFC = () => {
  const user = useRecoilValue(userInfo)
  return (
    <>
      {user ? (
        <LogoutButton />
      ) : (
        <>
          <PrimaryButton href="/login">ログイン</PrimaryButton>
        </>
      )}
    </>
  )
}
