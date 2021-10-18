import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { AssetsTrash } from 'src/components/pages/trash'

const TrashPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="削除されたタスク一覧 - Next.js × Nest.js Todoアプリ"
        description="削除されたタスク一覧を表示するページです"
      />
      <AssetsTrash />
    </>
  )
}

export default TrashPage
