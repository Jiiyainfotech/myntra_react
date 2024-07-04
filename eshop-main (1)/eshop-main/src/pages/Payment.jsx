import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoneyIcon from "@mui/icons-material/Money";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Countdown from "react-countdown";
import Payment_img from "../assets/payment.png";
import upi from "../assets/upi-2.gif";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const methods = [
    { id: "phonepe", label: "Phone Pay", icon: <PhoneIphoneIcon /> },
    { id: "paytm", label: "Paytm", icon: <AccountBalanceWalletIcon /> },
    { id: "bhim", label: "BHIM UPI", icon: <CreditCardIcon /> },
    { id: "whatsapp", label: "Whatsapp Pay", icon: <WhatsAppIcon /> },
    { id: "cod", label: "COD", icon: <MoneyIcon /> },
  ];

  const handleSelect = (id) => {
    setSelectedMethod(id);
  };

  return (
    <>
      <Header />
      <Grid container>
        <Box sx={{ textAlign: "center" }}>
          <img
            src={Payment_img}
            alt="Payment"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <span>
            Offer Ends In <Countdown date={Date.now() + 480000} />
          </span>
        </Box>
      </Grid>
      <Grid container sx={{ backgroundColor: "#E7EDFF", mt: 2 }}>
        <Grid item lg={3}>
          <Box sx={{ padding: "10px", width: "60px", float: "right" }}>
            <img src={upi} alt="payment" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid item lg={9} sx={{ display: "flex", alignItems: "center", pl: 5 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Pay online & get EXTRA ₹33 off
          </Typography>
        </Grid>
      </Grid>

      <Box p={2}>
        <Grid container spacing={2}>
          {methods.map((method) => (
            <Grid item xs={12} sm={6} key={method.id}>
              <Button
                variant={
                  selectedMethod === method.id ? "contained" : "outlined"
                }
                fullWidth
                startIcon={method.icon}
                onClick={() => handleSelect(method.id)}
              >
                {method.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container sx={{ p:{lg:'0px',sm:'10px',xs:'10px'} }}>
        <Grid lg={12} md={12} sm={12} xs={12} sx={{ mb:5 }}>
          <Typography sx={{ fontWeight: "bold", marginTop: "30px" }}>
            Price Details (1) Item
          </Typography>
          <hr />
          <span>Total MRP  <b style={{float:'right'}} >₹ 299</b> </span>
          <br /> <br />
          <span >Discount on MRP <b style={{float:'right',color:'green'}} > - ₹ 299</b> </span><br />
          <hr />
          <span style={{ fontWeight:'bold' }}>Total Amount <b style={{float:'right'}} >₹ 19</b> </span>
          <br />
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={6}>
            <span>₹ 19</span> <br />
            <span style={{color:'red'}}>View More</span>
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={6}>
          <Button variant="contained" fullWidth sx={{mt:2,backgroundColor:'#00321F'}}>Pay Now</Button>
          </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Payment;
