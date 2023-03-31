import { memo, useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

export const Contact = memo(() => {
  const [hoverSocial, setHoverSocial] = useState([false, false, false, false]);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      content: "",
    },
    onSubmit: (values, formikHelpers) => {
      console.log(values);
    },
  });
  return (
    <Box px={14}>
      <Typography color="#ff014f" fontSize={18}>
        CONTACT
      </Typography>
      <Typography>Contact With Me</Typography>
      <Grid container spacing={4} alignItems="stretch" mt={6}>
        <Grid item xs={5}>
          <Box
            sx={{
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
              p: 4,
              borderRadius: 4,
              height: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <img
                src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
                style={{ width: "100%" }}
              />
            </Box>
            <Typography
              textAlign={"left"}
              sx={{ fontWeight: "500", fontSize: 28 }}
              my={2}
            >
              Joseph Dung
            </Typography>
            <Typography
              textAlign={"left"}
              color={"#878e99"}
              mb={2}
              fontWeight={450}
              fontSize={17}
            >
              Chief Operating Officer
              <Typography color={"#878e99"} my={2} fontSize={17}>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </Typography>
              <Typography
                color={"#878e99"}
                sx={{ flexDirection: "row", display: "flex" }}
                fontSize={17}
              >
                Phone: <Typography ml={1}>070.8589.000</Typography>
              </Typography>
              <Typography
                color={"#878e99"}
                sx={{ flexDirection: "row", display: "flex" }}
                fontSize={17}
              >
                Email:
                <Typography ml={2}>qdung1994@gmail.com</Typography>
              </Typography>
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Button
                  sx={{ p: 2 }}
                  onMouseEnter={() =>
                    setHoverSocial([true, false, false, false])
                  }
                  onMouseLeave={() =>
                    setHoverSocial([false, false, false, false])
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={hoverSocial[0] ? "#ff014f" : "white"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={{
                      transform: hoverSocial[0] ? "scale(1.3)" : "scale(1)",
                    }}
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  sx={{ p: 2 }}
                  onMouseEnter={() =>
                    setHoverSocial([false, true, false, false])
                  }
                  onMouseLeave={() =>
                    setHoverSocial([false, false, false, false])
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="24px"
                    height="24px"
                    stroke={hoverSocial[1] ? "#ff014f" : "white"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={{
                      transform: hoverSocial[1] ? "scale(1.3)" : "scale(1)",
                    }}
                  >
                    <path d="M26.884,16.579C26.953,16.061,27,15.536,27,15c0-6.627-5.373-12-12-12c-0.536,0-1.061,0.047-1.579,0.116 C12.279,2.413,10.939,2,9.5,2C5.358,2,2,5.358,2,9.5c0,1.439,0.413,2.779,1.116,3.921C3.047,13.939,3,14.464,3,15 c0,6.627,5.373,12,12,12c0.536,0,1.061-0.047,1.579-0.116C17.721,27.587,19.061,28,20.5,28c4.142,0,7.5-3.358,7.5-7.5 C28,19.061,27.587,17.721,26.884,16.579z M15.149,22c-3.896,0-6.133-2.042-6.133-4.046c0-1.022,1.07-1.349,1.498-1.349 c0.989,0,1.318,0.807,1.498,1.177c1.005,2.066,1.971,1.794,2.923,1.884c0.841,0.079,2.815-0.292,2.815-1.734 c0-0.138,0.217-1.076-1.487-1.541c-1.089-0.298-3.009-0.663-4.589-1.271c-1.486-0.572-2.358-1.75-2.358-3.268 C9.316,11.093,9.705,8,14.967,8c3.512,0,5.384,1.799,5.384,3.382c0,0.364-0.139,0.685-0.418,0.974 c-0.279,0.289-1.065,0.712-1.926,0.161c-0.217-0.139-0.396-0.428-0.61-0.803c-0.258-0.471-0.68-1.381-2.623-1.381 c-1.885,0-2.408,0.899-2.408,1.274c0,1.26,2.405,1.525,3.051,1.692c2.358,0.608,5.566,1.167,5.566,4.346 C20.983,21.295,17.185,22,15.149,22z" />
                  </svg>
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  sx={{ p: 2 }}
                  onMouseEnter={() =>
                    setHoverSocial([false, false, true, false])
                  }
                  onMouseLeave={() =>
                    setHoverSocial([false, false, false, false])
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={hoverSocial[2] ? "#ff014f" : "white"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={{
                      transform: hoverSocial[2] ? "scale(1.3)" : "scale(1)",
                    }}
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  sx={{ p: 2 }}
                  onMouseEnter={() =>
                    setHoverSocial([false, false, false, true])
                  }
                  onMouseLeave={() =>
                    setHoverSocial([false, false, false, false])
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={hoverSocial[3] ? "#ff014f" : "white"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={{
                      transform: hoverSocial[3] ? "scale(1.3)" : "scale(1)",
                    }}
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Button>
              </Grid>
            </Grid>
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
                    id="name"
                    onChange={(e) =>
                      formik.setFieldValue("name", e.target.value)
                    }
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#878e99",
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
                    id="phone"
                    onChange={(e) =>
                      formik.setFieldValue("phone", e.target.value)
                    }
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
                          borderColor: "#878e99",
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
                  id="email"
                  onChange={(e) =>
                    formik.setFieldValue("email", e.target.value)
                  }
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
                        borderColor: "#878e99",
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
                  id="subject"
                  onChange={(e) =>
                    formik.setFieldValue("subject", e.target.value)
                  }
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
                        borderColor: "#878e99",
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
                  id="content"
                  onChange={(e) =>
                    formik.setFieldValue("content", e.target.value)
                  }
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
                        borderColor: "#878e99",
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
                onClick={() => formik.handleSubmit()}
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
