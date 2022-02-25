import { Cell } from './Cell'

type Props = {
  rowLength: number
}

export const EmptyRow = ({ rowLength }: Props) => {
  const emptyCells = Array.from(Array(rowLength))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
