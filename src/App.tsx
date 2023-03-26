import {
  Box,
  createTheme,
  CssBaseline,
  Divider as Divide,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Contact, Features, Header, Intro, Portfolio } from "components";
import { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./App.css";

const Divider = () => (
  <Divide
    sx={{
      background: "#121415",
      height: 1,
      width: "88.5%",
      alignSelf: "center",
      mt: 16,
      mb: 12,
    }}
  />
);

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

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Header offset={offset} />
          <Box display="flex" flexDirection="column" mt={offset > 10 ? 10 : 1}>
            <Intro />
            <Features
              features={[
                {
                  title: "Business Stagtegy",
                  description:
                    "I throw myself down among the tall grass by the stream as I lie close to the earth.",
                  icon: <MenuOutlinedIcon />,
                },
                {
                  title: "Business Stagtegy",
                  description:
                    "I throw myself down among the tall grass by the stream as I lie close to the earth.",
                  icon: <MenuOutlinedIcon />,
                },
                {
                  title: "Business Stagtegy",
                  description:
                    "I throw myself down among the tall grass by the stream as I lie close to the earth.",
                  icon: <MenuOutlinedIcon />,
                },
                {
                  title: "Business Stagtegy",
                  description:
                    "I throw myself down among the tall grass by the stream as I lie close to the earth.",
                  icon: <MenuOutlinedIcon />,
                },
                {
                  title: "Business Stagtegy",
                  description:
                    "I throw myself down among the tall grass by the stream as I lie close to the earth.",
                  icon: <MenuOutlinedIcon />,
                },
                {
                  title: "Business Stagtegy",
                  description:
                    "I throw myself down among the tall grass by the stream as I lie close to the earth.",
                  icon: <MenuOutlinedIcon />,
                },
              ]}
            />
            <Divider />
            <Portfolio />
            <Divider />
            <Contact />
          </Box>
          <Box sx={{ my: 8 }}>
            <Typography>© 2023. All rights reserved by Joseph Dũng.</Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
