import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <Grid container>
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "bold", color: "gray" }}
          >
            Contact Us
          </Typography>
          <span>
            <b>Email us :-</b> care@puremarty.site
          </span>
          <br />
          <br />
          <span>
            <b>Address :-</b> Shreenagar Vilash Nagar, Arjun Nagar jaipur ,
            Rajasthan 302020
          </span>
          <br />
          <br />
          <span>
            We're here to help nd answer any question you might have. we look
            forward to hearing from you
          </span>
        </Box>
        <Box sx={{textAlign:'center'}}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            sx={{ marginTop: "20px" }}
          />
          <TextField
            type="email"
            fullWidth
            label="Email"
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
            type="textarea"
            fullWidth
            multiline
            rows={4}
            label="Message"
            variant="outlined"
            sx={{ marginTop: "20px" }}
          />
          <Button variant="contained" sx={{ mt:2,backgroundColor:'#00321F' }} >Submit</Button>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default Contact;
