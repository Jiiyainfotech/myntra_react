import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Checkout = () => {
  return (
    <>
      <Header />
      <Grid container>
        <Box sx={{ backgroundColor: "#F2F2F3", width: "100%", p: 2 }}>
          <span
            style={{ fontSize: "12px", marginLeft: "10px", fontWeight: "bold" }}
          >
            CONTACT DETAILS
          </span>
        </Box>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          sx={{ marginTop: "20px" }}
        />
        <TextField
          type="number"
          fullWidth
          label="Mobile"
          variant="outlined"
          sx={{ marginTop: "20px" }}
        />
        <TextField
          type="number"
          fullWidth
          label="Pincode"
          variant="outlined"
          sx={{ marginTop: "20px" }}
        />

        <Box sx={{ backgroundColor: "#F2F2F3", width: "100%", p: 2, mt: 2 }}>
          <span
            style={{ fontSize: "12px", marginLeft: "10px", fontWeight: "bold" }}
          >
            ADDRESS
          </span>
        </Box>
        <TextField
          fullWidth
          label="Address (House No, Building,Street,Area)"
          variant="outlined"
          sx={{ marginTop: "20px" }}
        />
        <TextField
          label="City"
          variant="outlined"
          sx={{ marginTop: "20px", width: "45%" }}
        />
        <span style={{ width: "10%" }}></span>
        <TextField
          label="State"
          variant="outlined"
          sx={{ marginTop: "20px", width: "45%" }}
        />
        <Box sx={{ backgroundColor: "#F2F2F3", width: "100%", p: 2, mt: 2 }}>
          <span
            style={{ fontSize: "12px", marginLeft: "10px", fontWeight: "bold" }}
          >
            SAVE ADDRESS AS
          </span>
        </Box>
        <Box sx={{ display: "flex",mt:2 }}>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            sx={{ borderRadius: "30px", marginRight: "10px" }}
          >
            Home
          </Button>{" "}
          <br />
          <Button variant="outlined" color="secondary" size="small" sx={{ borderRadius: "30px" }}>
            Work
          </Button>
        </Box>
        <Button variant="contained" fullWidth sx={{mt:2,backgroundColor:'#00321F'}}>ADD ADDRESS</Button>
      </Grid>
      <Footer />
    </>
  );
};

export default Checkout;
