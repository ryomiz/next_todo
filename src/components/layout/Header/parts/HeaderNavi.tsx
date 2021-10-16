import Link from 'next/link'
import { memo } from 'react'

import { navMenu } from '../data'

export const HeaderNavi: React.VFC = memo(() => {
  return (
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
  )
})

HeaderNavi.displayName = 'HeaderNavi'
