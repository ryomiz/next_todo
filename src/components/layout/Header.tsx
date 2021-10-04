import { PrimaryButton } from 'src/components/general/PrimaryButton'

const navMenu = ['タスク一覧', '完了したタスク']
const buttonMenu = ['ログイン', '会員登録']

export const Header: React.VFC = () => {
  return (
    <header className="bg-ping-500 mb-8 px-2 py-4 shadow">
      <div className="flex items-center justify-between mx-auto max-w-screen-lg font-bold">
        <span className="text-3xl">NEXT TODO</span>
        <nav className="flex gap-12 items-center">
          <ul className="flex gap-4">
            {navMenu.map((el) => (
              <li
                key={el}
                className="text-gray-600 hover:text-gray-900 hover:underline cursor-pointer"
              >
                {el}
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
