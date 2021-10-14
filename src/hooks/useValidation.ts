import { useAuth } from './useAuth'
import { useToast } from './useToast'

type ReturnValue = {
  checkUser: (arg: string) => boolean
}

export const useValidation = (): ReturnValue => {
  const { user } = useAuth()

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
