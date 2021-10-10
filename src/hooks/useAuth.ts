import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { useToast } from './useToast'

import { axiosInstance } from 'src/lib/axiosInstance'
import { userInfo as state } from 'src/stores'
import { UserInfo } from 'src/types'

type ReturnValue = {
  login: (arg: UserInfo) => Promise<void>
  logout: () => void
}

export const useAuth = (): ReturnValue => {
  const router = useRouter()
  const { successToast, errorToast } = useToast()

  const [userInfo, setUserInfo] = useRecoilState(state)
  const login = useCallback(
    async (user: UserInfo) => {
      try {
        const res = await axiosInstance.post('auth/login', user)
        const token = res.data.access_token
        if (token) {
          successToast('ログインしました！🚀')
          setUserInfo({
            ...user,
            access_token: token,
          })
          router.push('/task')
        }
      } catch (err) {
        errorToast('ログインに失敗しました🥺')
      }
    },
    [router, errorToast, successToast, setUserInfo]
  )

  const logout = useCallback(() => {
    if (userInfo) {
      setUserInfo(null)
      successToast('ログアウトしました！🔓')
      router.push('/')
    } else {
      errorToast('ログアウトできませんでした🥺')
    }
  }, [])

  return { login, logout }
}
