import { Box, Button, Card, CardActions, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Charkha = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await axios.get(
      "https://api.charkha.online/api/get_products.php"
    );
    setData(res.data);
  };

  console.log(data);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <Grid container sx={{ p: { lg: "0px", sm: "5px", xs: "5px" } }}>
      {data.map((e) => (
        <Grid item lg={6} md={6} sm={6} xs={6} key={e.id}>
          <Box>
            <Card
              variant="outlined"
              onClick={() => {
                navigate(`/single-product/${e.id}`);
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
                    navigate(`/single-product/${e.id}`);
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
    </>
  );
};

export default Charkha;
