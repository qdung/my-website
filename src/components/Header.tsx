import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useState } from "react";

export const Header = () => {
  const matches = useMediaQuery("(min-width:1200px)");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => {
  //   console.log(offset);
  // }, [offset]);

  return (
    <Box
      display="flex"
      sx={{
        height: "5vh",
        width: "100vw",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        background: "#212428",
        position: offset > 75 ? "fixed" : "static",
        top: 0,
        opacity: offset > 75 ? 0.5 : 1,
      }}
    >
      <Box display="flex">
        <Typography>Nguyen Quoc Dung</Typography>
      </Box>
      {matches ? (
        <Box display="flex" justifyContent="space-between" mr={1}>
          <Button>
            <Typography>HOME</Typography>
          </Button>
          <Button>
            <Typography>FEATURES</Typography>
          </Button>
          <Button>
            <Typography>PORTFOLIO</Typography>
          </Button>
          <Button>
            <Typography>RESUME</Typography>
          </Button>
          <Button>
            <Typography>CLIENTS</Typography>
          </Button>
          <Button>
            <Typography>PRICING</Typography>
          </Button>
          <Button>
            <Typography>BLOG</Typography>
          </Button>
          <Button>
            <Typography>CONTACT</Typography>
          </Button>
        </Box>
      ) : (
        <Box>
          <IconButton>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
