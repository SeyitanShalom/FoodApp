import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
// import React from "react";
import Navbar from "./Navbar";
import DrawerComponent from "./DrawerComponent";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    // <Box
    //   sx={{
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     minWidth: "300px",
    //     height: { xs: "50px" },
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     padding: { xs: "0 30px" },
    //     backgroundColor: "#00191f",
    //     zIndex: 1000,
    //   }}
    // >
    //   <Typography
    //     sx={{
    //       color: "orange",
    //       fontSize: { xs: "20px" },
    //       fontWeight: "bold",
    //       textTransform: "uppercase",
    //       letterSpacing: 0,
    //     }}
    //   >
    //     Graniola
    //   </Typography>
    //   {}
    //   <Navbar />
    // </Box>
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "0 40px", md: "0 80px" },
          backgroundColor: "#02041b",
          borderBottom: "1px dashed white",

          // flexGrow: "1",
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: { xs: "23px", md: "30px" },
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: 0,
          }}
        >
          Graniola
        </Typography>
        {isMobile ? <DrawerComponent /> : <Navbar />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
