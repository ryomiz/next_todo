import { SecondaryButton } from 'src/components/general/button/SecondaryButton'

type Props = {
  duration: string
  task: string
}

export const CompletedTask: React.VFC<Props> = (props) => {
  const { duration, task } = props
  return (
    <div className="flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <p className="order-2">{task}</p>
      <div className="flex gap-2 order-3 ml-auto">
        <SecondaryButton color="indigo">戻す</SecondaryButton>
        <SecondaryButton color="red">削除</SecondaryButton>
      </div>
    </div>
  )
}
