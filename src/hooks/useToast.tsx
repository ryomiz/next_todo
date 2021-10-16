import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

type ReturnValue = {
  successToast: (arg: string) => void
  errorToast: (arg: string) => void
  MyToaster: React.VFC
}

export const useToast = (): ReturnValue => {
  const successToast = (message: string) => {
    toast.success(message)
  }
  const errorToast = (message: string) => {
    toast.error(message)
  }

  const MyToaster: React.VFC = () => {
    return (
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
    )
  }
  return { successToast, errorToast, MyToaster }
}
