import React, { useContext, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import feature from "../assets/feature.png";
import product1 from "../assets/product-1.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/ProductContext";

const API = "https://api.adelsocial.com/api/product/";

const Product = ({ cartItems, setCartItems }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {state,dispatch} = useContext(AppContext)
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const res = await axios.get(`${API}${slug}`);
    setProduct(res.data.product);
  };

  useEffect(() => {
    getProduct();
  }, [slug]);

  const handleAddToCart = (product) => {
    console.log('products',product)
    dispatch({type:'ADDTOCART',payload:product})
    setCartItems([...cartItems, product]);
    navigate("/cart");
  };

  

  const [pin, setPin] = useState("");
  const [text, setText] = useState("CHECK");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;

    if (/^\d{0,6}$/.test(input)) {
      setPin(input);
    }

    if (input.length > 5) {
      setText("Available");
      setMessage("2 Day Guaranteed Open Delivery available");
    } else {
      setMessage("");
      setText("CHECK");
    }
  };

  return product ? (
    <>
      <Header />
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ backgroundColor: "black", my: 1 }}
        >
          <Typography sx={{ color: "white", py: 1 }}>
            <marquee
              behavior="scroll"
              direction="up"
              scrollamount="2"
              style={{ textAlign: "center" }}
            >
              Buy 2 Get 1 Free (Add 3 item to cart)
            </marquee>
          </Typography>
        </Grid>
      </Grid>
      {/* product */}
      <Grid container sx={{ p: { lg: "0px", sm: "5px", xs: "10px" } }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <img
            src={`https://api.adelsocial.com/` + product.thumb_image}
            alt="product"
            style={{
              width: "300px",
              margin: "auto",
              display: "block",
              height: "280px",
            }}
          />
          <span
            style={{
              marginTop: "-40px",
              fontSize: "14px",
              border: "1px solid gray",
              borderRadius: "20px",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              width: "40px",
              zIndex: "1000",
              float: "right",
            }}
          >
            4.6 <StarIcon sx={{ fontSize: "16px", color: "green" }} />{" "}
          </span>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <Box sx={{ border: "2px solid black", borderRadius: "10px" }}>
            <img
              src={`https://api.adelsocial.com/` + product.thumb_image}
              alt="product"
              style={{
                width: "100px",
                margin: "auto",
                display: "block",
                height: "100px",
              }}
            />
          </Box>
        </Grid>
        <Grid container>
          <span style={{ marginTop: "10px", fontWeight: "bold" }}>
            {product.name}
          </span>
        </Grid>
        <span style={{ marginTop: "5px" }}>
          ₹ {product.offer_price} <del> ₹ {product.price}</del>{" "}
          <span style={{ color: "orange", marginLeft: "5px" }}> (85%) Off</span>{" "}
        </span>

        <Grid item lg={12} sm={12} md={12} xs={12} sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            CHECK DELIVERY & SERVICES
          </Typography>
          <Paper
            component="form"
            sx={{
              mx: { lg: 0, sm: 2, xs: 2, md: 2 },
              mt: 2,
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              type="number"
              value={pin}
              onChange={handleChange}
              placeholder="Enter Your Pin Code"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton sx={{ p: "10px" }} aria-label="search">
              <span
                style={{
                  fontSize: "14px",
                  color: text === "Available" ? "green" : "",
                }}
              >
                {text}
              </span>
            </IconButton>
          </Paper>
          <br />
          <span style={{ color: "green", fontSize: "18px" }}>{message}</span>
          <br />
          <br />
          <span>
            Pay on delivery might be available <br /> Easy 14 days returns and
            exchanges <br /> Try & Buy might be available
          </span>
          <Typography sx={{ fontWeight: "bold", marginTop: "30px" }}>
            Product Details
          </Typography>
          <span>{product.long_description}</span>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box>
            <img src={feature} alt="etc" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid
          container
          sx={{
            backgroundColor: "#00321F",
            my: 1,
            borderRadius: "10px",
            p: 3,
            cursor: "pointer",
            position: "sticky",
            bottom: 0,
          }}
          onClick={() => handleAddToCart(product)}
        >
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <span style={{ color: "white", fontSize: "14px" }}>
              Sales Ends Soon <br />
              <Countdown date={Date.now() + 480000} />
              &nbsp; Hurry! Up
            </span>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography
              sx={{ color: "white", fontSize: "18px", float: "right" }}
            >
              <ShoppingBagOutlinedIcon />
              GO TO BAG
            </Typography>
          </Grid>

          {/* realated products */}
        </Grid>
        <Typography sx={{ fontWeight: "bold", marginTop: "30px" }}>
          Related Products
        </Typography>
      </Grid>
      <Grid
        container
        sx={{ p: { lg: "0px", sm: "5px", md: "5px", xs: "5px" }, mt: 2 }}
      >
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Box>
            <Card variant="outlined">
              <CardContent>
                <img
                  src={product1}
                  alt="product"
                  style={{
                    width: "150px",
                    margin: "auto",
                    display: "block",
                    height: "150px",
                  }}
                />
                <span
                  style={{
                    marginTop: "-20px",
                    fontSize: "12px",
                    border: "1px solid gray",
                    borderRadius: "20px",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    width: "30px",
                    zIndex: 9999,
                  }}
                >
                  4.6 <StarIcon sx={{ fontSize: "16px", color: "green" }} />{" "}
                </span>
                <Grid container>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <span
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                      color="black"
                      gutterBottom
                    >
                      {/* {e.name.slice(0, 40) + `..`} */}
                      100% Natural Premium California Almonds (1 Kg)
                    </span>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2} xs={2}>
                    <span
                      style={{ fontWeight: "bold" }}
                      color="black"
                      gutterBottom
                    >
                      <FavoriteBorderIcon />
                    </span>
                  </Grid>
                </Grid>
                <span>
                  ₹ 299 <del>₹ 599 </del>{" "}
                  <span style={{ color: "orange", marginLeft: "5px" }}>
                    {" "}
                    86% Off
                  </span>{" "}
                </span>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#00321F" }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Box>
            <Card variant="outlined">
              <CardContent>
                <img
                  src={product1}
                  alt="product"
                  style={{
                    width: "150px",
                    margin: "auto",
                    display: "block",
                    height: "150px",
                  }}
                />
                <span
                  style={{
                    marginTop: "-20px",
                    fontSize: "12px",
                    border: "1px solid gray",
                    borderRadius: "20px",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    width: "30px",
                    zIndex: 9999,
                  }}
                >
                  4.6 <StarIcon sx={{ fontSize: "16px", color: "green" }} />{" "}
                </span>
                <Grid container>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <span
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                      color="black"
                      gutterBottom
                    >
                      {/* {e.name.slice(0, 40) + `..`} */}
                      100% Natural Premium California Almonds (1 Kg)
                    </span>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2} xs={2}>
                    <span
                      style={{ fontWeight: "bold" }}
                      color="black"
                      gutterBottom
                    >
                      <FavoriteBorderIcon />
                    </span>
                  </Grid>
                </Grid>
                <span>
                  ₹ 299 <del>₹ 599 </del>{" "}
                  <span style={{ color: "orange", marginLeft: "5px" }}>
                    {" "}
                    86% Off
                  </span>{" "}
                </span>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#00321F" }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  ) : (
    <CircularProgress/>
  );
};

export default Product;
