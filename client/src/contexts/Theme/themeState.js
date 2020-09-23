import React, { useReducer } from "react";
import themeContext from "./themeContext";
import themeReducer from "./themeReducer";

const ThemeState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{}}>{props.children}</themeContext.Provider>
  );
};

export default ThemeState;
