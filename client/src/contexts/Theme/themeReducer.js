import { BLUE_THEME, GREEN_THEME, RED_THEME } from "../../types";
import { green, red, blue } from "@material-ui/core/colors";

const themeReducer = (state, action) => {
  switch (action.type) {
    case RED_THEME:
      return {
        ...state,
        theme: {
          palette: {
            primary: {
              main: red[500],
            },
          },
        },
        saveTheme: localStorage.setItem("theme", JSON.stringify(state.theme)),
        currentTheme: JSON.parse(localStorage.getItem("theme")),
      };
    case GREEN_THEME:
      return {
        ...state,
        theme: {
          palette: {
            primary: {
              main: green[500],
            },
          },
        },
        saveTheme: localStorage.setItem("theme", JSON.stringify(state.theme)),
        currentTheme: JSON.parse(localStorage.getItem("theme")),
      };
    case BLUE_THEME:
      return {
        ...state,
        theme: {
          palette: {
            primary: {
              main: blue[500],
            },
          },
        },
        saveTheme: localStorage.setItem("theme", JSON.stringify(state.theme)),
        currentTheme: JSON.parse(localStorage.getItem("theme")),
      };

    default:
      return state;
  }
};

export default themeReducer;
