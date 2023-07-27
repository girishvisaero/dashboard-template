import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
// import { AppBar } from '@mui/material'
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { GrMail, GrInbox } from "react-icons/gr";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["dashboard", "users", "users/123", "products"].map(
            (text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <GrInbox /> : <GrMail />}
                  </ListItemIcon>
                  <Link
                    to={text === "dashboard" ? "/" : `/${text}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <ListItemText
                      primary={
                        text.charAt(0).toUpperCase() +
                        text.slice(1).replace("-", " ")
                      }
                    />
                  </Link>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <GrInbox /> : <GrMail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Divider />
          <List>
            <Link
              to={"/login"}
              style={{ color: "black", textDecoration: "none" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GrInbox />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
