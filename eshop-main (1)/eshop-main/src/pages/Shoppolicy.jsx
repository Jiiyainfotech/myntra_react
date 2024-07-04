import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Grid, Typography } from "@mui/material";
import Newsletter from "../components/Newsletter";

const Shoppolicy = () => {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{ p: { lg: "0px", sm: "5px", xs: "5px", md: "5px" } }}
      >
        <Typography variant="h4">Shipping policy</Typography>
        <Grid item lg={12} sm={12} xs={12} md={12}>
          <span>
            <b>Shipping Delivery Policy</b>
          </span>{" "}
          <br />
          <br />
          <span>
            We ship the orders on the next working day. In any case we will ship
            your order within 48 hours. <br /> For Customer living in Metros and Tier-1
            cities products will get delivered within 2 working days, and for
            the rest of India they make take up-to <b>4- 7 working days.</b>  <br />  Delivery
            of products is however, limited to certain pin-code/locations. For
            more information on delivery locations of products, you can use the
            ‘Check Delivery’ option on product page. <br /> You will get updated status
            of shipment at its each stage from order is placed to, processes to,
            ready to ship to, dispatch to deliver. You can track your orders
            through; My Account - Orders. Please note our shipping policy as
            follows: <br /> However in some cases, we may take longer, up to <b>3 working
            days,</b>  to ship the order. <br /> We ship on all week days (Monday to
            Saturday), excluding Sunday & public holidays. <br /> To ensure that your
            order reaches you in the fastest time and in good condition, we only
            ship through reputed courier agencies. <br /> While we strive hard to
            deliver on time, due to the load with the couriers, estimate a delay
            of 0-2 days. <br /> While we shall endeavor to ship all items in your order
            together, this may not always be possible due to product
            characteristics, or availability. <br /> Please note all items will be
            shipped with an invoice mentioning the price, as per Indian Tax
            Regulations. <br /> We Are not liable for any delay in delivery by the
            courier company / postal authorities and only guarantees to hand
            over the consignment to the courier company or postal authorities
            within <b>3 working days</b> from the date of the order and payment or as
            per the delivery date agreed at the time of order confirmation.
          </span>
          <Newsletter/>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Shoppolicy;
