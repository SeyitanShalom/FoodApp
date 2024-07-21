import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
const ContactLinks = () => {
  const contactLinks = ["Contact Us"];
  return (
    <Box>
      {contactLinks.map((item) => {
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
      <Box sx={{ display: "flex" }}>
        <IconButton sx={{ paddingLeft: "0" }}>
          <FacebookIcon sx={{ color: "secondary.main" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ color: "secondary.main" }} />
        </IconButton>
        <IconButton>
          <XIcon sx={{ color: "secondary.main" }} />
        </IconButton>
        <IconButton>
          <YouTubeIcon sx={{ color: "secondary.main" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactLinks;
