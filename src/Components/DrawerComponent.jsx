import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { Link } from "react-router-dom";
const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const lInks = ["Home", "About", "Menu", "Services", "Contact"];
  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontWeight: "700",
  };
  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          backdropFilter: "blur(5px)",
          background: "transparent",
        }}
      >
        <Box
          sx={{
            // textAlign: "center",
            // backdropFilter: "sepia(90%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            backgroundColor: "primary.main",
            position: "relative",
          }}
        >
          <List>
            {lInks.map((link) => (
              <ListItem key={link}>
                <ListItemText>
                  <Link style={linkStyles} to="/">
                    {link}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
            {/* <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                // <Link to="/">Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                // <Link to="/about">About</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                // <Link to="/contact">Contact</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                // <Link to="/about">Faq</Link>
              </ListItemText>
            </ListItem> */}
          </List>
          <IconButton
            onClick={() => setOpenDrawer(false)}
            sx={{ position: "absolute", right: "20px", top: "10px" }}
          >
            <CloseRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(true)}>
        <MenuRoundedIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
