import React from "react";
import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ftLogo from "../../assets/logos/logo-footer.svg";
import one from "../../assets/images/avatar1.jpg";

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <AppBar
        sx={{
          background: "#FFFFFF 0% 0% no-repeat padding-box !important",
          opacity: 1,
          boxShadow: "0px 2px 4px #00000029 !important",
          top: 0,
          left: 0,
          height: 70,
          alignContent: "space-between",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          zIndex: "1300 !important",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            paddingLeft: { xs: 1 },
            height: 65,
            width: { xs: "80% !important", md: "100%" },
          }}
        >
          <img className="logo-style" src={ftLogo}></img>

          <Divider
            orientation="vertical"
            sx={{
              height: 28,
              alignSelf: "center",
              backgroundColor: "#96323A 0% 0% no-repeat padding-box",
            }}
            flexItem
          />

          <Typography className="site-name">Data Quality Guardians</Typography>
        </Toolbar>
        <Toolbar
          variant="dense"
          sx={{
            paddingLeft: { xs: 1 },
            height: 65,
            width: { xs: "20%", md: "100%" },
          }}
        >
          <div className="user-details">
            <Avatar alt="Remy Sharp" src={one} sx={{ width: 56, height: 56 }} />
            <div>
              <Typography className="user-name">
                Bharathy Ravichandran
              </Typography>
              <Typography className="user-role">
                Sr. Software Engineer
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
