import toast from 'react-hot-toast'

type ReturnValue = {
  successToast: (arg: string) => void
  errorToast: (arg: string) => void
}

export const useToast = (): ReturnValue => {
  const successToast = (message: string) => {
    toast.success(message)
  }
  const errorToast = (message: string) => {
    toast.error(message)
  }
  return { successToast, errorToast }
}
