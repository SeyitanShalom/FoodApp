import { Box, Typography } from "@mui/material";
import React from "react";
import ServiceItem from "./ServiceItem";
import CTA from "./CTA";
import { serviceList } from "./ServiceList";

const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        margin: { xs: "60px 20px 20px", sm: "80px 40px 40px" },
        padding: { xs: " 50px 20px", sm: " 50px 20px" },
        borderRadius: "10px",
        height: { xs: "930px", sm: "920px", md: "700px" },
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        // gridTemplateColumns: { xs: "1fr", xl: "repeat(2, 1fr)" },
        textAlign: { xs: "center" },
        justifyContent: { xs: "" },
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
        Services
      </Typography>
      <Typography
        variant="h5"
        sx={{
          // marginBottom: { xs: "30px" },
          fontSize: { xs: "22px" },
          fontWeight: "500",
        }}
      >
        We provide best quality foods
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "10px" },
        }}
      >
        {serviceList.map((item) => (
          <ServiceItem item={item} />
        ))}
      </Box>
      <CTA />
    </Box>
  );
};

export default Services;
