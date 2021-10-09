import { Toaster } from 'react-hot-toast'

export const MyToaster: React.VFC = () => {
  return (
    <Toaster
      toastOptions={{
        duration: 3000,
      }}
    />
  )
}
