import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import product from "../assets/product-1.png";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import safty from '../assets/safty.png';
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Cart = ( cartItems, setCartItems ) => {

  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  
  const [watch, setWatch] = useState(0);

  const randomWatch = () => {
    setWatch(Math.floor(Math.random() * 20) + 1);
  };

  useEffect(() => {
    randomWatch();
  }, []);

  return (
    <>
      <Header />
      <Grid container>
      <Grid container spacing={2} sx={{ padding: "10px" }}>
      <Grid
        container
        sx={{
          p: {
            lg: "5px",
            sm: "5px",
            md: "5px",
            xs: "5px",
            border: "1px solid gray",
            borderRadius: "10px",
          },
        }}
      >
        <Grid item lg={4} md={4} sm={3} xs={4}>
          <Box>
            <img
              src={product}
              alt=""
              style={{ width: "160px", height: "130px" }}
            />
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>100% Natural Premium California Almonds (1 Kg) </span>
            <CloseIcon />
          </Box>
          <span
            style={{
              color: "gray",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <VisibilityIcon
              sx={{ color: "red", fontSize: "16px", marginRight: "5px" }}
            />{" "}
            <b>{watch}</b> &nbsp; people viewing now{" "}
          </span>
          <span style={{ fontSize: "12px" }}>QTY - 1</span>
          <br />
          <br />
          <span>
            ₹ 299 <del>₹ 599 </del>{" "}
            <span style={{ color: "orange", marginLeft: "5px" }}> 86% Off</span>{" "}
          </span>
          <br />
          <br />
          <span
            style={{ display: "flex", alignItems: "center", fontSize: "14px" }}
          >
            {" "}
            <CheckOutlinedIcon sx={{ color: "green" }} /> &nbsp; Delivery
            Between <b> &nbsp; 27 Jun - 30 Jun</b>
          </span>
        </Grid>
      </Grid>
      </Grid>
      <Grid sx={{p:2}}>
        <Grid lg={12}>
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
          <Box sx={{textAlign:'center',backgroundColor:'#FFF6F4',py:1,mt:2}}>
          <span style={{ fontSize:'12px',fontWeight:600 }}> 1 item Selected for Order </span>
          </Box>
          <Button variant="contained" fullWidth sx={{mt:2,backgroundColor:'#00321F'}}>Place Order</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} sx={{ mt:2 }}>
            <img src={safty} alt="" style={{ width:'100%' }} />
        </Grid>
      </Grid>
      </Grid>
      <Footer/>
    </>
  );
};

export default Cart;
