import { Box, Typography } from "@mui/material";
import React from "react";
import MenuItem from "./MenuItem";
import { menuList } from "./MenuList";

const Menu = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        margin: { xs: "60px 20px 20px", sm: "80px 40px 40px" },
        padding: { xs: " 50px 20px", sm: " 50px 20px" },
        borderRadius: "10px",
        height: { xs: "830px", sm: "580px", md: "500px" },
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        // gridTemplateColumns: { xs: "1fr", xl: "repeat(2, 1fr)" },
        textAlign: { xs: "center" },
        // justifyContent: { xs: "" },
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography
        sx={{
          color: "secondary.main",
          fontWeight: 900,
          marginBottom: "-5px",
          marginTop: { xs: "15px" },
        }}
      >
        Food Menu
      </Typography>
      <Typography
        sx={{
          marginBottom: { xs: "30px" },
          fontSize: { xs: "22px" },
          fontWeight: "500",
        }}
      >
        Fresh taste and affordable price
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {menuList.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default Menu;
