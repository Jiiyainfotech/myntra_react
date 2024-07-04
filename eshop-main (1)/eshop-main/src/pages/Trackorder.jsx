import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Button, TextField, Typography } from "@mui/material";

const Trackorder = () => {
  return (
    <>
      <Header />
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography sx={{ fontWeight: "bold", color: "gray" }}>
          Track Order
        </Typography>
        <br />
        <span>
        Enter your order id and Track here your order here.
        </span>
        <TextField
          type="email"
          placeholder="Order Id"
          fullWidth
          sx={{ mt: 2 }}
        />
        <br />
        <Button variant="contained" sx={{ mt: 2, backgroundColor: "#00321F" }}>
          Track
        </Button>
      </Box>

      <Footer />
    </>
  );
};

export default Trackorder;
