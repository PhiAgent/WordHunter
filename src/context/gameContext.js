
import React, {useContext, useState, createContext} from 'react';

const ThemeContext = createContext();

export const ContextProvider = ({children}) => {

  // states
  const [lightMode, setLightMode] = useState(true);
  const [colorBlind, setColorBlind] = useState(false);

  // context methods
  const changeMode = () => setLightMode(!lightMode);
  const changeColorBlind = () => setColorBlind(!colorBlind);

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

