import { SecondaryButton } from 'src/components/general/button/SecondaryButton'

type Props = {
  duration: string
  task: string
}

export const UncompletedTask: React.VFC<Props> = (props) => {
  const { duration, task } = props
  return (
    <div className="flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <p className="order-2">{task}</p>
      <div className="flex gap-3 order-3 ml-auto">
        <SecondaryButton color="gray">編集</SecondaryButton>
        <SecondaryButton color="green">完了</SecondaryButton>
      </div>
    </div>
  )
}
