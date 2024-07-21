import { Box, Typography } from "@mui/material";
import React from "react";
import MenuLinks from "./MenuLinks";
import ServiceLinks from "./ServiceLinks";
import InfoLinks from "./InfoLinks";
import ContactLinks from "./ContactLinks";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        margin: { xs: "60px 20px 20px", sm: "80px 40px 40px" },
        padding: { xs: " 50px 50px", sm: " 50px 50px" },
        borderRadius: "10px",
        height: { xs: "380px", md: "200px" },

        color: "white",
      }}
    >
      <Box
        sx={{
          // display: "flex",
          // flexWrap: "wrap",
          // justifyContent: "space-between",
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          justifyItems: { md: "center" },
          gap: { xs: "50px" },
          textAlign: "start",
        }}
      >
        <MenuLinks />
        <ServiceLinks />
        <InfoLinks />
        <ContactLinks />
      </Box>
    </Box>
  );
};

export default Footer;
