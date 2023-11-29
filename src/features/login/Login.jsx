import React from "react";
import ftLogo from "../../assets/logos/logo-footer.svg";
import "./Login.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={0}
        sm={0}
        md={0}
        lg={6}
        xl={7}
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <div className="loginImage"></div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={5}
        style={{ backgroundColor: "#F8F9FB" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-end",

            bgcolor: "F8F9FB",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
              bgcolor: "#F8F9FB",
              width: "100%",
              height: "100%",
            }}
          >
            <Container maxWidth="sm">
              <Card interactive="true" className="login-card">
                <img className="logo-iqvia" src={ftLogo}></img>

                <Typography
                  style={{
                    marginTop: 24,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                  gutterBottom
                  color="primary"
                >
                  Welcome to Data Quality Guardians
                </Typography>
                <div className="login-form">
                  <Typography className="form-text">Username</Typography>
                  <TextField id="username" />
                  <Typography
                    className="form-text"
                    style={{ paddingTop: "15px" }}
                  >
                    Password
                  </Typography>
                  <TextField
                    id="outlined-password-input"
                    type="password"
                    autoComplete="current-password"
                  />
                  <div className="forgot-pwd">
                    <FormControlLabel
                      className="form-text"
                      control={<Checkbox className="form-text" />}
                      label="Remember this device"
                    />
                    <Typography color="primary">Forgot Password ?</Typography>
                  </div>
                  <div className="login-button">
                    <Button
                      id="loginButton"
                      className="login-button"
                      variant="contained"
                      fullWidth
                      onClick={() => navigate("/rule")}
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </Card>
            </Container>

            <div></div>
          </Box>
          <Grid container spacing={0}>
            <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
            <Grid item xs={8} md={8} lg={8} xl={8}></Grid>

            <Grid item xs={2} md={2} lg={2} xl={2}>
              <div className="copy-container">
                <span className="copy-right">© IQVIA</span>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
