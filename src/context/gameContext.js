
import React, {useContext, useState, createContext} from 'react';

const ThemeContext = createContext();

export const ContextProvider = ({children}) => {

  // States
  const [lightMode, setLightMode] = useState(true);
  const [colorBlind, setColorBlind] = useState(false);

  // Centralized Dark Mode & ColorMode Switch
  const changeMode = () => {
    document.body.classList[lightMode ? 'add' : 'remove']('dark');
    setLightMode(!lightMode);
  }
  const changeColorBlind = () => {
    document.body.classList[colorBlind ? 'remove' : 'add']('color-blind');
    setColorBlind(!colorBlind);
  }

  return(
    <ThemeContext.Provider value={{
      lightMode,
      changeMode,
      colorBlind,
      changeColorBlind
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Supplies Context values in Consumer Components
export const useMode = () => useContext(ThemeContext);

export default useMode;

