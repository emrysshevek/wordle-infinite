import { BaseModal } from './BaseModal'
import { SunIcon } from '@heroicons/react/outline'
import { APPLY } from '../../constants/strings'

type Props = {
  isOpen: boolean
  difficulty: string
  handleDifficulty: (difficulty: string) => void
  handleClose: () => void
  handleDarkMode: (idDark: boolean) => void
  isDark: boolean
}

export const SettingsModal = ({ isOpen, difficulty, handleDifficulty, handleClose, handleDarkMode, isDark,  }: Props) => {

  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-lg text-gray-500 dark:text-gray-300">
        Difficulty
      </p>

      <div className="flex justify-center text-sm text-gray-500 dark:text-gray-300 columns-3">
        <div className="form-check form-check-inline mr-5">
            <input 
            type="radio"
            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="inlineRadioOptions" id="inlineRadio1" 
            value="easy" 
            checked={difficulty === 'easy'}
            onClick={()=>{
                difficulty = 'easy'
                handleDifficulty('easy')
            }}
            />
            <label className="form-check-label inline-block" htmlFor="inlineRadio10">Easy</label>
        </div>
        <div className="form-check form-check-inline mr-5">
            <input 
            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="inlineRadioOptions" id="inlineRadio2"  
            type="radio" 
            value="medium" 
            checked={difficulty === 'medium'}
            onClick={()=>{
                difficulty = 'medium'
                handleDifficulty('medium')
            }}
            />
            <label className="form-check-label inline-block" htmlFor="inlineRadio20">Medium</label>
        </div>
        <div className="form-check form-check-inline">
            <input 
            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="inlineRadioOptions" id="inlineRadio3" 
            type="radio" 
            value="hard" 
            checked={difficulty === 'hard'}
            onClick={()=>{
                difficulty = 'hard'
                handleDifficulty('hard')
            }}
            />
            <label className="form-check-label inline-block" htmlFor="inlineRadio30">Hard</label>
        </div>
      </div>

      <br></br>

      <p className="text-lg text-gray-500 dark:text-gray-300">
        Dark Mode
      </p>
      <div className="flex justify-center text-sm text-gray-500 dark:text-gray-300 columns-1">
        <SunIcon
        className="h-6 w-6 cursor-pointer dark:stroke-white"
        onClick={() => handleDarkMode(!isDark)}
        />
      </div>

      <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
        <div>
        <button
          type="button"
          className="mt-2 w-auto rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={() => {
            window.location.reload();
          }}
        >
          {APPLY}
        </button>
        </div>
      </div>

    </BaseModal>
  )
}
