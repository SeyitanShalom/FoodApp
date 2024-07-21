import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
// import homeImage from "../images/home.png";
const Home = ({ brandName }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        margin: { xs: "90px 20px 20px", sm: "105px 40px 40px" },
        // padding: { xs: " 50px 20px", sm: " 50px 20px", md: "50px 80px" },
        padding: { xs: " 50px 20px", sm: " 50px 20px", md: "50px 200px" },
        borderRadius: "10px",
        height: { xs: "530px", sm: "510px" },
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        // flexWrap: "wrap",
        // gridTemplateColumns: { xs: "1fr", xl: "repeat(2, 1fr)" },
        textAlign: { xs: "center", md: "start" },
        justifyContent: { xs: "", sm: "", md: "space-evenly" },
        alignItems: "center",
        gap: { md: "50px" },
        color: "white",
      }}
    >
      <Box
        sx={{
          background: "transparent",
          // maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "center", md: "start" },
          // textAlign: "start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            lineHeight: ".1",
            marginBottom: "2px",
          }}
        >
          Welcome to
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "secondary.main",
            fontWeight: 500,
            fontSize: { xs: "40px", sm: "45px" },
            marginBottom: "15px",
          }}
        >
          {brandName}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "15px" },
            lineHeight: "1.1",
            fontWeight: { xs: "400" },
            width: { md: "400px" },
          }}
        >
          At {brandName} we're passionate about crafting delicious, high quality
          food products that bring joy to your table.
        </Typography>

        <Button
          sx={{
            display: "block",
            backgroundColor: "secondary.main",
            fontSize: { xs: "11px", sm: "12px" },
            color: "white",
            marginTop: { xs: "20px" },
            "&:hover": {
              backgroundColor: "white",
              color: "orange",
              transition: ".3s ease",
            },
          }}
        >
          Read More
        </Button>
      </Box>
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
        alt="Home Image"
        // src={homeImage}
        src={"./images/home.png"}
      />
    </Box>
  );
};

export default Home;
