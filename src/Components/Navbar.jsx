import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import React from "react";
const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontFamily: "nunito",
    "&:hover": { color: "orange", transition: ".3s ease" },
    cursor: "pointer",
  };
  const linkList = ["Home", "About", "Menu", "Services", "Contact"];
  return (
    <Stack
      spacing={3}
      direction="row"
      sx={{ color: "white", marginRight: "0px" }}
    >
      {linkList.map((link) => {
        return (
          <Link key={link} style={linkStyle}>
            {link}
          </Link>
        );
      })}
      {/* <Link to="" style={linkStyle}>
        <Typography
          variant="p"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { color: "orange", transition: ".3s ease" },
          }}
        >
          Home
        </Typography>
      </Link>
      <Link to="" style={linkStyle}>
        <Typography
          variant="p"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { color: "orange", transition: ".3s ease" },
          }}
        >
          About
        </Typography>
      </Link>
      <Link to="" style={linkStyle}>
        <Typography
          variant="p"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { color: "orange", transition: ".3s ease" },
          }}
        >
          Menu
        </Typography>
      </Link>
      <Link to="" style={linkStyle}>
        <Typography
          variant="p"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { color: "orange", transition: ".3s ease" },
          }}
        >
          Services
        </Typography>
      </Link>
      <Link to="" style={linkStyle}>
        <Typography
          variant="p"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { color: "orange", transition: ".3s ease" },
          }}
        >
          Contact
        </Typography>
      </Link> */}
    </Stack>
  );
};

export default Navbar;
