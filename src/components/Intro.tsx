import { Box, Grid, Typography } from "@mui/material";
import "../App.css";
import Typewriter from "typewriter-effect";

export const Intro = () => {
  return (
    <Grid container spacing={4} mt={2}>
      <Grid item xs={8}>
        <Box
          display="flex"
          alignItems="flex-start"
          textAlign="left"
          px={14}
          flexDirection="column"
        >
          <Typography variant="h5" color="#c4cfde">
            WELCOME TO MY WORLD
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h2" mr={1}>
              Hi, I'm
            </Typography>
            <Typography variant="h2" color={"#ff014f"}>
              NGUYEN QUOC DUNG.
            </Typography>
          </Box>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span style="font-family:'Poppins' ,sans-serif;font-size:24pt">a developer.</span>`
                )
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  `<span style="font-family:'Poppins' ,sans-serif;font-size:24pt">a photographer.</span>`
                )
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              cursorClassName: "cursor--typewriter",
              cursor: "_",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box alignItems="center">
          <img src={require("assets/myself.png")} className="avatar--intro" />
        </Box>
      </Grid>
    </Grid>
  );
};
