import { WORDS4, WORDS5, WORDS6 } from '../constants/wordlist'
import { VALIDGUESSES4, VALIDGUESSES5, VALIDGUESSES6 } from '../constants/validGuesses'

const WORDS = (localStorage.getItem('difficulty') === 'easy') 
                ? WORDS4 
                : (localStorage.getItem('difficulty') === 'hard') 
                ? WORDS6
                : WORDS5

const VALIDGUESSES = (localStorage.getItem('difficulty') === 'easy') 
                ? VALIDGUESSES4 
                : (localStorage.getItem('difficulty') === 'hard') 
                ? VALIDGUESSES6
                : VALIDGUESSES5

export const isWordInWordList = (word: string) => {
  console.log("searching for " + word)
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  console.log("4 Letters: " + WORDS4.length + " 5 Letters: " + WORDS5.length + " 6 Letters: " + WORDS6.length)

  return {
    solution: WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
