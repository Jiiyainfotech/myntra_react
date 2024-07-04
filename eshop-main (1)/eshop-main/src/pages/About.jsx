import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          p: { lg: "0px", sm: "5px", xs: "5px", md: "5px" },
          textAlign: "center",
        }}
      >
        <Grid item lg={12} sm={12} md={12} xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            About Us
          </Typography>{" "}
          <br />
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Welcome to puremarty.site, the official online platform of . Our
            company is dedicated to bringing you the finest products and
            services, built on a foundation of excellence and innovation. At ,
            we believe in quality, integrity, and customer satisfaction.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500, mt: 2 }}>
            Who We Are
          </Typography>{" "}
          <br />
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            is a trusted name in the industry, known for our commitment to
            delivering exceptional value and top-notch products. With years of
            experience and a passion for excellence, we strive to exceed our
            customers' expectations in every way possible.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500, mt: 2 }}>
            Our Mission
          </Typography>{" "}
          <br />
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Our mission is to provide high-quality products that enhance the
            lives of our customers. We are dedicated to continuous improvement
            and innovation, ensuring that we always stay ahead in a rapidly
            evolving market. At , we prioritize customer satisfaction and work
            tirelessly to maintain the trust and loyalty of our valued clients.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500, mt: 2 }}>
            What We Offer At
          </Typography>{" "}
          <br />
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            puremarty.site, you will find a wide range of products meticulously
            crafted to meet the highest standards of quality. Our extensive
            product line is designed to cater to diverse needs and preferences,
            ensuring that there is something for everyone.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500, mt: 2 }}>
            Why Choose Us
          </Typography>{" "}
          <br />
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Quality Assurance: <br />
            We are committed to delivering products that are not only superior
            in quality but also reliable and durable. <br />
            <br />
            Customer-Centric Approach: <br />
            Our customers are at the heart of everything we do. We listen,
            understand, and respond to their needs with utmost care. <br />
            <br />
            Innovation and Excellence: <br />
            We continuously seek new ways to improve and innovate, staying ahead
            in the industry and setting new standards of excellence. Thank you
            for choosing puremarty.site and . We look forward to serving you and
            providing you with the best products and services. Registered
            address as below. <br /> <br />
            Shreenagar Vilash Nagar, Arjun Nagar jaipur , Rajasthan 302020
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default About;
