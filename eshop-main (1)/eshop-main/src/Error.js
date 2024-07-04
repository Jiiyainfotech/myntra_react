import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import error from "./assets/error.jpg";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
  return (
    <>
      <Header />
      <Grid container>
        <Grid item lg={12}>
            <Box sx={{textAlign:'center'}}>
                <img src={error} alt="Page Not Found" style={{width:'100%'}}/>
                <Button onClick={()=>{navigate('/')}}  variant="contained" >Go Homepage</Button>
            </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Error;
