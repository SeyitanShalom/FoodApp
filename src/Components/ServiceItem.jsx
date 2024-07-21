import { Box, Typography } from "@mui/material";
import React from "react";

const ServiceItem = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "400px" },
        marginTop: "50px",
      }}
    >
      <Box
        component="img"
        src={item.image}
        sx={{
          width: { xs: "50px" },
        }}
      ></Box>
      <Typography
        variant="h6"
        sx={{
          color: "secondary.light",
          marginBottom: "10px",
          fontSize: { xs: "17px" },
        }}
      >
        {item.name}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontWeight: { xs: "300" } }}>
        {item.description}
      </Typography>
    </Box>
  );
};

export default ServiceItem;
