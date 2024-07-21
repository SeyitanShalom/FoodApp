import { Box, Typography } from "@mui/material";
import React from "react";

const CTA = () => {
  return (
    <Box
      sx={{
        width: { xs: "400px", sm: "700px" },
        height: { xs: "70px" },
        borderRadius: "10px",
        padding: "15px 0",
        backgroundColor: "rgb(255, 241, 222)",
        marginTop: "100px",
        textAlign: "center",
        color: "#00191f",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "900", lineHeight: "1.1", fontSize: { xs: "15px" } }}
      >
        We make quality foods <br /> Everyday!
      </Typography>
      <Box
        component="button"
        sx={{
          backgroundColor: "secondary.main",
          border: "none",
          padding: { xs: "5px 5px" },
          borderRadius: "5px",
          color: "white",
          fontWeight: "700",
          marginTop: { xs: "15px" },
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "white",
            color: "secondary.main",
            border: "2px solid",
            borderColor: "secondary.main",
            transition: ".3s ease",
          },
        }}
      >
        {" "}
        Let's Talk
      </Box>
    </Box>
  );
};

export default CTA;
