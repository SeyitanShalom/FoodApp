import { Box, Typography } from "@mui/material";
// import aboutImage from "../images/about.png";

import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        margin: { xs: "60px 20px 20px", sm: "80px 40px 40px" },
        padding: { xs: " 50px 20px", sm: " 50px 20px", md: "50px 200px" },
        borderRadius: "10px",
        height: { xs: "530px", sm: "510px" },
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        // flexWrap: "wrap",
        // gridTemplateColumns: { xs: "1fr", xl: "repeat(2, 1fr)" },
        textAlign: { xs: "center", md: "start" },
        justifyContent: { xs: "", sm: "space-evenly", md: "space-evenly" },
        alignItems: "center",
        color: "white",
        gap: { md: "50px" },
      }}
    >
      <Box
        component="img"
        sx={{
          height: { xs: "270px" },
          width: { xs: "320px" },
          margin: "0px auto",
          background: "transparent",
          marginTop: { xs: "80px", sm: "80px", md: "0px" },
          order: { xs: "2", sm: "2", md: "0" },

          // maxHeight: { xs: 300, md: 200 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        // src={aboutImage}
        src={"./public/images/about.png"}
      />
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: "secondary.main",
            fontWeight: 500,
            marginBottom: "-5px",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", fontSize: { xs: "21px" } }}
        >
          We speak the good food language
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "300",
            marginTop: "15px",
            lineHeight: "1.1",
            fontSize: { xs: "15px" },
          }}
        >
          We believe that eating healthy should never mean sacrificing taste.
          That's why we take great care in crafting out recipes to ensure that
          each food bite is bursting with flavour.
        </Typography>
        <Box
          component="button"
          sx={{
            // height: { xs: "40px" },
            // width: { xs: "100px" },
            border: "none",
            borderRadius: "5px",
            textAlign: "center",
            backgroundColor: "secondary.main",
            fontSize: { xs: "11px", sm: "12px" },
            color: "white",
            fontWeight: "bold",
            marginTop: { xs: "20px" },
            cursor: "pointer",
            padding: { xs: "10px" },
            "&:hover": {
              backgroundColor: "white",
              color: "secondary.main",
              transition: ".3s ease",
            },
          }}
        >
          LEARN MORE
        </Box>
      </Box>
    </Box>
  );
};

export default About;
