
import React, {useContext, useState, createContext} from 'react';

const ThemeContext = createContext();

export const ContextProvider = ({children}) => {

  // States
  const [lightMode, setLightMode] = useState(true);
  const [colorBlind, setColorBlind] = useState(false);
  const [score, setScore] = useState(0);
  const [enteredWords, setEnteredWords] = useState([]);
  const [currentEntry, setCurrentEntry] = useState('');
  const [leaders, setLeaders] = useState([]);
  const [currentPlayer, setPlayer] = useState('');
  const [endStatus, setEndStatus] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  // Centralized Dark Mode & ColorMode Switch
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
      endStatus,
      gameOver,
      setGameOver,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Supplies Context values in Consumer Components
export const useMode = () => useContext(ThemeContext);

export default useMode;

