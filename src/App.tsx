import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Header } from "components/Header";
import { Intro } from "components/Intro";
import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#212428",
      },
    },
    typography: {
      allVariants: {
        color: "white",
        fontFamily: "Poppins, sans-serif",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Header />
          <Box display="flex" flexDirection="column">
            <Intro />
            {/* <img src={require("assets/img1.png")} /> */}
            {/* <img src={require("assets/img2.png")} /> */}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
