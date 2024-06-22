import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import React from "react";
  import { navigations } from "../data/Navlinks";
  import { Link } from "react-router-dom";
  
  const Menubar = ({ open, toggleDrawer, token, logOut }) => {
    return (
      <Drawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            boxSizing: "border-box",
            backgroundColor: "#f7f7f7",
          },
        }}
      >
        <Box
          sx={{ width: 250,  }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navigations.map((navigation, index) => (
              <Link
                to={navigation.route}
                key={index}
                // style={{ textDecoration: "none", color: "#3c170c" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={navigation.title} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Link>
            ))}
              {token ? (
            <Link onClick={logOut}>
              <div className="flex pt-3">
                <h1 className="px-4 ">Log Out</h1>
              </div>
            </Link>
          ) : (
            <Link to="/sign_in">
              <div className="flex pt-3">
                <h1 className="px-4 ">Sign in</h1>
              </div>
            </Link>
          )}
          </List>
          <Divider />
        </Box>
      </Drawer>
    );
  };
  
  export default Menubar;
  