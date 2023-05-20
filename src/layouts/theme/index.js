import { createTheme } from "@mui/material/styles";



export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#D2AA80",
    },
    secondary: {
      main: "#e65100",
    },
  },
  typography: {
    fontFamily: "tanha,vazir, roboto",
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#D2AA80",
    },
    secondary: {
      main: "#e65100",
    },
  },
  typography: {
    fontFamily: "tanha,vazir, roboto",
  },
});