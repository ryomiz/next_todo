type Props = {
  children: React.ReactNode
  color?: 'pink' | 'red' | 'indigo' | 'green' | 'gray'
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const SecondaryButton: React.FC<Props> = (props) => {
  const { children, color = 'pink', onClick } = props
  return (
    <button onClick={onClick} className={`btn-secondary __${color}`}>
      {children}
    </button>
  )
}
