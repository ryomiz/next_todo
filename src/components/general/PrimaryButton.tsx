type Props = {
  children: React.ReactNode
  isLarge?: boolean
}

export const PrimaryButton: React.FC<Props> = (props) => {
  const { children, isLarge = false } = props

  if (isLarge) {
    return (
      <a className="px-8 py-3 text-white text-xl bg-pink-400 hover:bg-pink-500 rounded-lg cursor-pointer">
        {children}
      </a>
    )
  }
  return (
    <a className="px-6 py-2 text-white text-sm bg-pink-400 hover:bg-pink-500 rounded-lg cursor-pointer">
      {children}
    </a>
  )
}
