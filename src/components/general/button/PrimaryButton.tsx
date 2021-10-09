import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href: string
  isLarge?: boolean
}

export const PrimaryButton: React.VFC<Props> = (props) => {
  const { children, href, isLarge = false } = props

  if (isLarge) {
    return (
      <Link href={href}>
        <a className="px-8 py-3 text-white text-xl bg-pink-400 hover:bg-pink-500 rounded-lg cursor-pointer">
          {children}
        </a>
      </Link>
    )
  }
  return (
    <Link href={href}>
      <a className="px-6 py-2 text-white text-sm bg-pink-400 hover:bg-pink-500 rounded-lg cursor-pointer">
        {children}
      </a>
    </Link>
  )
}
