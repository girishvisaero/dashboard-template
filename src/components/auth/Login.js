import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:15
      }}
    >
      {/* <div>Login Page</div> */}
      <div>
        <Button color="primary" variant="contained" LinkComponent={Link} to="/">
          Login
        </Button>
      </div>
    </Box>
  );
};

export default Login;
