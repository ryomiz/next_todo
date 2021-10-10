import { useRecoilValue } from 'recoil'

import { useToast } from './useToast'

import { userInfo } from 'src/stores'

type ReturnValue = {
  checkUser: (arg: string) => boolean
}

export const useValidation = (): ReturnValue => {
  const user = useRecoilValue(userInfo)

  const { errorToast } = useToast()

  const checkUser = (createdBy: string) => {
    if (!user) {
      errorToast('ログインしてください🥺')
      return false
    } else if (user.username !== createdBy) {
      errorToast('他の人のタスクは編集できません🥺')
      return false
    } else {
      return true
    }
  }

  return { checkUser }
}
