import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { CategoryStats, GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  SHARE_TEXT,
  PLAY_AGAIN,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  currStats: CategoryStats
  updateStatsView: (newStats: CategoryStats) => void
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  currStats,
  updateStatsView,
  isGameLost,
  isGameWon,
  handleShare,
}: Props) => {
  // if (currStats.totalGames <= 0) {
  //   return (
  //     <BaseModal
  //       title={STATISTICS_TITLE}
  //       isOpen={isOpen}
  //       handleClose={handleClose}
  //     >
        
  //       <StatBar gameStats={currStats} />
  //     </BaseModal>
  //   )
  // }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={()=>{
        handleClose()
        updateStatsView(gameStats.all)
      }}
    >
      <div className="flex items-center justify-center">
      <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
        <button type="button" className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
        onClick={()=>{
          updateStatsView(gameStats.all)
        }}
        >All</button>
        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
        onClick={()=>{
          updateStatsView(gameStats.easy)
        }}
        >Easy</button>
        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
        onClick={()=>{
          updateStatsView(gameStats.medium)
        }}
        >Medium</button>
        <button type="button" className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
        onClick={()=>{
          updateStatsView(gameStats.hard)
        }}
        >Hard</button>
      </div>
    </div>
    {console.log("current stats" + currStats)}
      <StatBar gameStats={currStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      {console.log(currStats)}
      <Histogram gameStats={currStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              window.location.reload();
            }}
          >
            {PLAY_AGAIN}
          </button>
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(guesses, isGameLost)
              handleShare()
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
