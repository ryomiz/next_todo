import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href: string
  isLarge?: boolean
}

export const PrimaryButton: React.FC<Props> = (props) => {
  const { children, href, isLarge = false } = props

  return (
    <Link href={href}>
      <a className="btn-primary" data-large={isLarge}>
        {children}
      </a>
    </Link>
  )
}
