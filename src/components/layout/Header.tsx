import Link from 'next/link'

import { PrimaryButton } from 'src/components/general/button/PrimaryButton'

const navMenu = [
  {
    text: 'タスク一覧',
    href: '/task',
  },
  {
    text: '完了したタスク',
    href: '/trash',
  },
]
const buttonMenu = ['ログイン', '会員登録']

export const Header: React.VFC = () => {
  return (
    <header className="bg-ping-500 mb-8 px-2 py-4 shadow">
      <div className="flex items-center justify-between mx-auto max-w-screen-lg font-bold">
        <Link href="/">
          <a className="text-3xl">NEXT TODO</a>
        </Link>
        <nav className="flex gap-12 items-center">
          <ul className="flex gap-4">
            {navMenu.map((item) => (
              <li
                key={item.text}
                className="text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
              >
                <Link href={item.href}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            {buttonMenu.map((el) => (
              <PrimaryButton key={el}>{el}</PrimaryButton>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
