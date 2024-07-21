import { Box, Typography } from "@mui/material";
import React from "react";

const MenuLinks = () => {
  const menuLinks = [
    "Menu Link",
    "Home",
    "About",
    "Menu",
    "Services",
    "Contact",
  ];
  return (
    <Box>
      {menuLinks.map((item) => {
        return (
          <Typography
            variant="body2"
            sx={{
              color: "grey",
              marginBottom: "10px",
              ":first-of-type": {
                position: "relative",
                marginBottom: "10px",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                "::before": {
                  content: "''",
                  width: "50px",
                  height: "2.5px",
                  backgroundColor: "secondary.main",
                  position: "absolute",
                  left: "0px",
                  bottom: "0",
                },
              },
            }}
          >
            {item}
          </Typography>
        );
      })}
    </Box>
  );
};

export default MenuLinks;
