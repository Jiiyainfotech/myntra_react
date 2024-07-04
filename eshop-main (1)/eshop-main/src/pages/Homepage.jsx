// Homepage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import termscond from "../assets/terms&cond.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

const slideImages = [
  {
    url: banner1,
    caption: "Slide 1",
  },
  {
    url: banner2,
    caption: "Slide 2",
  },
];

const API = "https://api.adelsocial.com/api/product";


const Homepage = () => {
  
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(API);
    setData(res.data.products.data);
  };

  console.log(data);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <Paper
        component="form"
        sx={{
          mx: { lg: 0, sm: 2, xs: 2, md: 2 },
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Paper>
      <Grid
        sx={{ display: { lg: "block", md: "none", sm: "none", xs: "none" } }}
      >
        <div className="slide-container" style={{ marginTop: "20px" }}>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "130px",
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </Grid>
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ backgroundColor: "#00321F", my: 1 }}
        >
          <Typography sx={{ color: "white", py: 1 }}>
            <marquee behavior="scroll" direction="left">
              Buy 2 Get 1 Free (Add 3 item to cart)
            </marquee>
          </Typography>
        </Grid>
        <Box>
          <img src={termscond} alt="Terms&Cond" style={{ width: "100%" }} />
        </Box>
      </Grid>

      {/* Products  */}
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "bold", my: 1 }}
      >
        Pack Of 1 Kg Collection
      </Typography>
      <Grid container sx={{ p: { lg: "0px", sm: "5px", xs: "5px" } }}>
        {data.map((e) => (
          <Grid item lg={6} md={6} sm={6} xs={6} key={e.id}>
            <Box>
              <Card
                variant="outlined"
                onClick={() => {
                  navigate(`/single-product/${e.slug}`);
                }}
              >
                <CardContent>
                  <img
                    src={`https://api.adelsocial.com/` + e.thumb_image}
                    alt="product"
                    style={{
                      width: "120px",
                      margin: "auto",
                      display: "block",
                      height: "120px",
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
                    4.6
                    {e.rating}{" "}
                    <StarIcon sx={{ fontSize: "14px", color: "green" }} />{" "}
                  </span>
                  <Grid container>
                    <Grid item lg={10} md={10} sm={10} xs={10}>
                      <span
                        style={{ fontWeight: "bold", fontSize: "14px" }}
                        color="black"
                        gutterBottom
                      >
                        {e.name.slice(0, 40) + `..`}
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
                  <br />
                  <span style={{ fontSize: "15px" }}>
                    ₹ {e.offer_price} <del> ₹ {e.price}</del>{" "}
                    <span style={{ color: "orange", marginLeft: "5px" }}>
                      {" "}
                      50% Off
                    </span>{" "}
                  </span>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    onClick={() => {
                      navigate(`/single-product/${e.slug}`);
                    }}
                    sx={{ backgroundColor: "#00321F" }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/shop");
          }}
          sx={{ border: "2px solid #00321F", mt: 2, color: "#00321F" }}
        >
          View More
        </Button>
      </Box>
      <Footer />
      {/* products end */}
    </>
  );
};

export default Homepage;
