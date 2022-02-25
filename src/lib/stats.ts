import {
  CategoryStats,
  GameStats,
  // CategoryStats,
  loadStatsFromLocalStorage,
  saveStatsToLocalStorage,
} from './localStorage'

// In stats array elements 0-5 are successes in 1-6 trys

export const addStatsForCompletedGame = (
  gameStats: GameStats,
  count: number,
  difficulty: string
) => {
  // Count is number of incorrect guesses before end.
  const stats = { ...gameStats }

  var catStats
  if (difficulty === "easy"){
    catStats = stats.easy
  }
  else if (difficulty === 'hard'){
    catStats = stats.hard
  }
  else {
    catStats = stats.medium
  }

  catStats.totalGames += 1
  stats.all.totalGames += 1
  // stats.totalGames += 1

  if (count > 5) {
    // A fail situation
    // stats.currentStreak = 0
    // stats.gamesFailed += 1
    stats.all.currentStreak = 0
    stats.all.gamesFailed += 1
    catStats.currentStreak = 0
    catStats.gamesFailed += 1
  } else {
    // stats.winDistribution[count] += 1
    // stats.currentStreak += 1
    stats.all.winDistribution[count] += 1
    stats.all.currentStreak += 1
    catStats.winDistribution[count] += 1
    catStats.currentStreak += 1

    // if (stats.bestStreak < stats.currentStreak) {
    //   stats.bestStreak = stats.currentStreak
    // }
    if (stats.all.bestStreak < stats.all.currentStreak) {
      stats.all.bestStreak = stats.all.currentStreak
    }
    if (catStats.bestStreak < catStats.currentStreak){
      catStats.bestStreak = catStats.currentStreak
    }
  }

  // stats.successRate = getSuccessRate(stats, difficulty)
  stats.all.successRate = getSuccessRate(stats.all, difficulty)
  catStats.successRate = getSuccessRate(catStats, difficulty)

  saveStatsToLocalStorage(stats)
  return stats
}

const defaultStats: GameStats = {
  easy: {
    winDistribution: [0, 0, 0, 0, 0, 0],
    gamesFailed: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalGames: 0,
    successRate: 0,
  },
  medium: {
    winDistribution: [0, 0, 0, 0, 0, 0],
    gamesFailed: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalGames: 0,
    successRate: 0,
  },
  hard: {
    winDistribution: [0, 0, 0, 0, 0, 0],
    gamesFailed: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalGames: 0,
    successRate: 0,
  },
  all: {
    winDistribution: [0, 0, 0, 0, 0, 0],
    gamesFailed: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalGames: 0,
    successRate: 0,
  },
}

export const loadStats = () => {
  return loadStatsFromLocalStorage() || defaultStats
}

const getSuccessRate = (catStats: CategoryStats, difficulty: string) => {
  const { totalGames, gamesFailed } = catStats
  console.log(totalGames, gamesFailed)
  return Math.round(
    (100 * (totalGames - gamesFailed)) / Math.max(totalGames, 1)
  )
}
