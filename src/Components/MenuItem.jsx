import { Box, Typography } from "@mui/material";
import React from "react";

const MenuItem = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(255, 241, 222)",
        padding: " 10px 60px",
        borderRadius: "10px",
      }}
      key={item.id}
    >
      <Box
        component="img"
        sx={{
          height: { xs: "130px" },
          width: { xs: "130px" },
          background: "transparent",
          // maxHeight: { xs: 300, md: 200 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={item.image}
      />
      <Typography
        variant="h6"
        sx={{
          color: "#00191f",
          fontWeight: "900",
          fontSize: { xs: "17px" },
          width: { xs: "170px" },
        }}
      >
        {item.name}
      </Typography>
      <Typography
        sx={{
          color: "#00191f",
          fontWeight: { xs: "400" },
          fontSize: { xs: "13px" },
        }}
      >
        {item.tag}
      </Typography>
      <Typography
        sx={{
          color: "secondary.main",
          fontWeight: "900",
          fontSize: { xs: "13px" },
        }}
      >
        {item.price}
      </Typography>
    </Box>
  );
};

export default MenuItem;
