import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  rowLength: number
}

export const Grid = ({ guesses, currentGuess, rowLength }: Props) => {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < 6 && <CurrentRow guess={currentGuess} rowLength={rowLength} />}
      {empties.map((_, i) => (
        <EmptyRow rowLength={rowLength} key={i} />
      ))}
    </div>
  )
}
