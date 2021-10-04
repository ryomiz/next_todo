type Props = {
  children: React.ReactNode
  color?: 'pink' | 'red' | 'indigo' | 'green' | 'gray'
}

export const SecondaryButton: React.FC<Props> = (props) => {
  const { children, color = 'pink' } = props
  return <button className={`btn-secondary __${color}`}>{children}</button>
}
