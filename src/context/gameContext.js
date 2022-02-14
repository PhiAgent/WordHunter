
import React, {useContext, useState, createContext} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getRandomWord, shuffle } from '../utils/helperFunctions';

const ThemeContext = createContext();

export const ContextProvider = ({children}) => {

  // States
  const [lightMode, setLightMode] = useLocalStorage('lightmode', false);
  const [colorBlind, setColorBlind] = useLocalStorage('colorBlind', false);
  const [score, setScore] = useLocalStorage('score', 0);
  const [enteredWords, setEnteredWords] = useLocalStorage('enteredWords', []);
  const [currentEntry, setCurrentEntry] = useState('');
  const [leaders, setLeaders] = useLocalStorage('leaders', []);
  const [currentPlayer, setPlayer] = useLocalStorage('currentPlayer', '');
  // const [endStatus, setEndStatus] = useLocalStorage('endStatus', true);
  const [gameOver, setGameOver] = useLocalStorage('gameOver', false);
  const [unScrambled, setUnScrambled] =
    useLocalStorage('unScrambled', getRandomWord());

  // Centralized Dark Mode & ColorBlindMode Switch
  const changeMode = () => {
    document.body.classList[lightMode ? 'add' : 'remove']('dark');
    setLightMode(!lightMode);
  };

  const changeColorBlind = () => {
    document.body.classList[colorBlind ? 'remove' : 'add']('color-blind');
    setColorBlind(!colorBlind);
  };

  return(
    <ThemeContext.Provider value={{
      lightMode,
      changeMode,
      colorBlind,
      changeColorBlind,
      setScore,
      score,
      enteredWords,
      setEnteredWords,
      currentEntry,
      setCurrentEntry,
      setLeaders,
      leaders,
      currentPlayer,
      setPlayer,
      // endStatus,
      // setEndStatus,
      gameOver,
      setGameOver,
      unScrambled,
      setUnScrambled,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Supplies Context values in Consumer Components
const useMode = () => useContext(ThemeContext);

export default useMode;

