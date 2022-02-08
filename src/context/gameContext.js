import React, {useContext, useState, createContext} from 'react';

const ThemeContext = createContext();

const ContextProvider = ({children}) => {

  // state
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

const useMode = () => useContext(ThemeContext);

export default useMode;