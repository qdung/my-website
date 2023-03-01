import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useState } from "react";

export const Header = ({ offset }: { offset: number }) => {
  const matches = useMediaQuery("(min-width:1200px)");

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
        position: offset > 10 ? "fixed" : "static",
        top: 0,
        opacity: offset > 10 ? 0.5 : 1,
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
