import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Newsletter = () => {
  return (
    <>
      <Box sx={{ textAlign: "center",mt:3,p:{lg:'0px',sm:'10px',xs:'10px'} }}>
        <Typography sx={{ fontWeight: "bold", color: "gray" }}>
          Get Our Newsletter
        </Typography>
        <br />
        <span>
          Subscribe to receive update, access to exclusive deals, and more.
        </span>
        <TextField
          type="email"
          placeholder="Enter Email"
          fullWidth
          sx={{ mt: 2 }}
        />
        <br />
        <Button variant="contained" sx={{ mt: 2, backgroundColor: "#00321F" }}>
          Subscribe
        </Button>
      </Box>
    </>
  );
};

export default Newsletter;
