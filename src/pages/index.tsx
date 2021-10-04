import Image from 'next/image'

import type { NextPage } from 'next'

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const Home: NextPage = () => {
  return (
    <ul className="divide-gray-200 divide-y">
      {people.map((person) => (
        <li key={person.email} className="flex p-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image width={256} height={256} src={person.image} alt="" />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 text-sm font-medium">{person.name}</p>
            <p className="text-gray-500 text-sm">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Home
