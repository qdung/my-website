import { memo } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

export const Contact = memo(() => {
  return (
    <Box px={14}>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={5}>
          <Box
            sx={{
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
              justifyContent: "flex-start",
              display: "flex",
              p: 4,
              borderRadius: 4,
              height: "100%",
            }}
          >
            <Typography>Hello</Typography>
            <Box sx={{ width: "100%", height: 200, overflow: "hidden" }}>
              <img
                src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
                style={{ width: 100, height: 100 }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
              justifyContent: "flex-start",
              display: "flex",
              p: 4,
              borderRadius: 4,
              height: "100%",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Box display={"flex"} flexDirection="column">
                  <Typography
                    sx={{
                      textAlign: "left",
                      mb: 1,
                      color: "#a0a8b3",
                      fontSize: 15,
                    }}
                  >
                    YOUR NAME
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: 4,
                          borderWidth: 1,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#FF004F",
                          borderWidth: 2,
                        },
                      },
                    }}
                    inputProps={{
                      style: {
                        borderRadius: 12,
                        color: "white",
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display={"flex"} flexDirection="column">
                  <Typography
                    sx={{
                      textAlign: "left",
                      mb: 1,
                      color: "#a0a8b3",
                      fontSize: 15,
                    }}
                  >
                    PHONE NUMBER
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    inputProps={{
                      style: {
                        borderRadius: 12,
                        color: "white",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: 4,
                          borderWidth: 1,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#FF004F",
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Typography pl={4} my={2}>
                Email
              </Typography>
              <Box pl={4} width="100%">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  inputProps={{
                    style: {
                      color: "white",
                    },
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 4,
                        borderWidth: 1,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF004F",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
              </Box>
              <Typography pl={4} my={2}>
                Subject
              </Typography>
              <Box pl={4} width="100%">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  inputProps={{
                    style: {
                      color: "white",
                    },
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 4,
                        borderWidth: 1,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF004F",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
              </Box>
              <Typography pl={4} my={2}>
                Your Message
              </Typography>
              <Box pl={4} width="100%">
                <TextField
                  multiline
                  id="outlined-basic"
                  variant="outlined"
                  inputProps={{
                    style: {
                      color: "white",
                      minHeight: 200,
                    },
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 4,
                        borderWidth: 1,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF004F",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
              </Box>
              <Button
                sx={{
                  my: 2,
                  ml: 4,
                  py: 2,
                  alignSelf: "center",
                  width: "100%",
                  boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                }}
              >
                <Typography color={"#ff014f"}>Send Message</Typography>
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});
