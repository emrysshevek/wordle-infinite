import { CategoryStats } from '../../lib/localStorage'
import { Progress } from './Progress'

type Props = {
  gameStats: CategoryStats
}

export const Histogram = ({ gameStats }: Props) => {
  // const winDistribution = gameStats.winDistribution
  const winDistribution = gameStats.winDistribution
  const maxValue = Math.max(...winDistribution)

  return (
    <div className="columns-1 justify-left m-2 text-sm dark:text-white">
      {winDistribution.map((value, i) => (
        <Progress
          key={i}
          index={i}
          size={maxValue ? 90 * (value / maxValue) : 0}
          label={String(value)}
        />
      ))}
    </div>
  )
}
