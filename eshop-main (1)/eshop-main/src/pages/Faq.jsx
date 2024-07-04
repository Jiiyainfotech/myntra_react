import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { Box, Grid, Typography } from "@mui/material";
import pay from "../assets/pay.png";
import van from "../assets/van.png";
import cancel from "../assets/cancel.png";
import exchange from "../assets/exhange.png";
import size from "../assets/size.png";

const Faq = () => {
  const items = [
    {
      id: 1,
      title: "Shipping, Order Tracking & Delivery",
      img: van,
    },
    {
      id: 2,
      title: "Return And Exchange",
      img: exchange,
    },
    {
      id: 3,
      title: "Cancellation And Modification",
      img: cancel,
    },
    {
      id: 4,
      title: "Payments",
      img: pay,
    },
    {
      id: 5,
      title: "Sizing Help",
      img: size,
    },
  ];

  return (
    <>
      <Header />
      <Grid container sx={{ display: "flex", justifyContent: "space-around",p:{lg:'0px',sm:'5px',md:'5px',xs:'5px'} }}>
        {items.map((e, key = 0) => {
          return (
            <Grid
              item
              lg={4}
              sm={4}
              md={4}
              xs={4}
              sx={{ textAlign: "center", p: 1 }}
            >
              <Box
                sx={{
                  width:{lg:"150px",sm:'120px',xs:'120px'},
                  height:{lg:"180px",sm:'150px',xs:'150px'},
                  border: "1px solid gray",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={e.img}
                  alt="Images"
                  style={{ width:'100%' }}
                /> <br />
                <span sx={{ }}>
                    {e.title}
                </span>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Faq;
