import {
  Box,
  Button,
  ButtonBase,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { shadows } from "@mui/system";
import { useState } from "react";

interface IFeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Features = ({ features }: { features: IFeatureItem[] }) => {
  return (
    <Box px={14}>
      <Box textAlign="left" p={2}>
        <Typography>Features</Typography>
        <Typography>What I Do</Typography>
      </Box>
      <Grid container spacing={4}>
        {features.map((item, index) => (
          <FeatureItem
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </Grid>
    </Box>
  );
};

const FeatureItem = ({ title, description, icon }: IFeatureItem) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid item xs={4}>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        variant="outlined"
        sx={{
          ":hover": {
            bgcolor: "#1A1D21",
            borderWidth: 0,
          },
          bgcolor: "linear-gradient(145deg, #1e2024, #23272b);",
          boxShadow: 4,
          borderWidth: 0,
          height: 250,
        }}
      >
        <Box textAlign="left" p={2}>
          <IconButton>{icon}</IconButton>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
          {hover && <Typography>leen</Typography>}
        </Box>
      </Button>
    </Grid>
  );
};
