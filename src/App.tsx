import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Features, Header, Intro } from "components";
import { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
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
            {/* <img src={require("assets/img1.png")} /> */}
            {/* <img src={require("assets/img2.png")} /> */}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
