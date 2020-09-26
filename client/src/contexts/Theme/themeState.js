import React, { useReducer } from "react";
import themeReducer from "./themeReducer";
import themeContext from "./themeContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BLUE_THEME, GREEN_THEME, RED_THEME } from "../../types";

const ThemeState = (props) => {
  const initialState = {
    theme: {
      palette: {
        primary: {
          main: "#3f50b5",
        },
      },
    },
    currentTheme: JSON.parse(localStorage.getItem("theme")),
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);
  const theme = createMuiTheme(state.currentTheme);

  const redTheme = () => {
    dispatch({
      type: RED_THEME,
    });
  };

  const blueTheme = () => {
    dispatch({
      type: BLUE_THEME,
    });
  };

  const greenTheme = () => {
    dispatch({
      type: GREEN_THEME,
    });
  };

  return (
    <themeContext.Provider value={{ greenTheme, blueTheme, redTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </themeContext.Provider>
  );
};

export default ThemeState;
