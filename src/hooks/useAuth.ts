import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { useToast } from './useToast'

import { axiosInstance } from 'src/lib/axiosInstance'
import { userInfo as state } from 'src/stores'
import { UserInfo } from 'src/types'

type ReturnValue = {
  user: UserInfo | undefined
  login: (arg: UserInfo) => Promise<void>
  logout: () => void
  checkUser: (createdBy: string) => boolean
}

export const useAuth = (): ReturnValue => {
  const [user, setUser] = useRecoilState(state)

  const router = useRouter()
  const { successToast, errorToast } = useToast()

  const login = useCallback(
    async (usr: UserInfo) => {
      try {
        const res = await axiosInstance().post('auth/login', usr)
        const token = res.data.access_token
        if (token) {
          setUser({
            ...usr,
            access_token: token,
          })
          successToast('ログインしました！🚀')
          router.push('/task')
        }
      } catch (err) {
        errorToast('ログインに失敗しました🥺')
      }
    },
    [errorToast, router, setUser, successToast]
  )

  const logout = useCallback(() => {
    if (user) {
      setUser(undefined)
      successToast('ログアウトしました！🔓')
      router.push('/')
    } else {
      errorToast('ログアウトできませんでした🥺')
    }
  }, [errorToast, router, setUser, successToast, user])

  const checkUser = useCallback(
    (createdBy: string) => {
      if (!user) {
        errorToast('ログインしてください🥺')
        return false
      } else if (user.username !== createdBy) {
        errorToast('他の人のタスクは編集できません🥺')
        return false
      } else {
        return true
      }
    },
    [errorToast, user]
  )

  return { user, login, logout, checkUser }
}
