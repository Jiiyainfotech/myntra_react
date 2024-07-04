import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const API = "https://api.adelsocial.com/api/product";

const Category = () => {
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
      <Footer />
    </>
  );
};

export default Category;
