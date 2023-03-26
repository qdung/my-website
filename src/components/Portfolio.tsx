import { Box, Typography, Grid, Button } from "@mui/material";
import { memo, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CardPortfolio = memo(() => {
  const [hover, setHover] = useState(false);
  return (
    <Grid item xs={3} md={3}>
      <Box
        sx={{
          ":hover": {
            bgcolor: "#1A1D21",
          },
          borderRadius: 4,
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;",
          p: 4,
          flexDirection: "column",
          overflow: "hidden",
          height: 400,
        }}
      >
        <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          variant="outlined"
          sx={{
            ":hover": {
              borderWidth: 0,
            },
            borderRadius: 4,
            borderWidth: 0,
            width: 300,
            height: 200,
            overflow: "hidden",
          }}
        >
          <Box>
            <img
              src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg"
              style={{
                width: 300,
                height: 200,
                transition: " 0.4s all ease-in-out",
                transform: hover ? "scale(1.15)" : "scale(1)",
                borderRadius: 12,
              }}
            />
          </Box>
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Typography sx={{ display: "flex", color: "#ff014f" }}>
            Mobile App
          </Typography>
          <Typography sx={{ display: "flex" }}>My Portfolio</Typography>
        </Box>
        <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          sx={{
            ":hover": {
              borderWidth: 0,
              bgcolor: "#1A1D21",
            },
            mt: 2,
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="h5"
            color={hover ? "#ff014f" : "white"}
            sx={{
              textAlign: "left",
            }}
          >
            The services provide for design
          </Typography>
          <ArrowOutwardIcon sx={{ display: "inline-flex", color: "#ff014f" }} />
        </Button>
      </Box>
    </Grid>
  );
});

export const Portfolio = memo(() => {
  return (
    <Box px={14}>
      <Box textAlign="center" p={2}>
        <Typography>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</Typography>
        <Typography>My Portfolio</Typography>
      </Box>
      <Grid container spacing={4} justifyContent={"center"}>
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
      </Grid>
    </Box>
  );
});
