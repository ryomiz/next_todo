import React, { memo, useCallback } from 'react'
import toast, { Toaster } from 'react-hot-toast'

type ReturnValue = {
  successToast: (arg: string) => void
  errorToast: (arg: string) => void
  MyToaster: React.VFC
}

export const useToast = (): ReturnValue => {
  const successToast = useCallback((message: string) => {
    toast.success(message)
  }, [])

  const errorToast = useCallback((message: string) => {
    toast.error(message)
  }, [])

  const MyToaster: React.VFC = memo(() => {
    return (
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
    )
  })

  MyToaster.displayName = 'MyToaster'

  return { successToast, errorToast, MyToaster }
}
