import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Newsletter from "../components/Newsletter";

const Refundreturn = () => {
  return (
    <>
      <Header />
      <Grid container sx={{ p:{lg:'0px',sm:'5px',xs:'5px',md:'5px'} }} >
      <Typography variant="h4">Refund policy</Typography>
        <Grid item lg={12} sm={12} xs={12} md={12}>
        <span>
          <b>returns</b>
        </span> <br /><br />
        <span>
          Our return policy lasts 7 days. If 7 days have gone by since your
          order delivery, unfortunately, we can’t offer you a refund or
          exchange. <br /> <br />
          No returns and only exchanges will be applicable on all orders
          purchased during the sale time. <br /> <br />
          To be eligible for a return, your item must be unused and in the same
          condition that you received it. It must also be in the original
          packaging. <br /> <br />
          Wrong product handover in return: Action will be taken on the basis of
          package opening footage & will be returning the same product we have
          received. In such cases, the seller will not be liable for any loss &
          no action will be made if the customer fails to raise the query within
          7 days of pickup. <br /> <br />
          Several types of goods are exempt from being returned. Perishable
          goods such as boxers shorts, sunglasses, leather jackets, and socks
          cannot be returned. <br /> <br />
          If the product has been collected by the courier partner and is
          subsequently returned to you due to unexpected circumstances, the
          courier partner may request you to show a government-issued ID as
          evidence of the handover. <br /> <br />
          Additional non-returnable items: <br />
          - Gift cards <br />
          - Downloadable software products <br />
          - For additional products that are not returnable, it is mentioned in
          the product description.
          <br /> <br />
          To complete your return, we require a receipt or proof of purchase.
          Please do not send your purchase back to the manufacturer. <br />
          <br />
          There are certain situations where only partial refunds are granted
          (if applicable) <br /> - Any item not in its original condition, is
          damaged or missing parts for reasons not due to our error <br /> - Any
          item that is returned more than 10 days after delivery
        </span>
        <br /> <br />
        <span>
          <b>Refunds (if applicable)</b>
        </span>{" "}
        <br /> <br />
        <span>
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund. <br /> If it
          is approved, then your refund will be processed and credited to your
          THE HOUSE OF RARE Wallet / Source of payment / bank account (for COD
          only) within 7-10 working days.
        </span>
        <br /> <br />
        <span>
          <b>Late or missing refunds (if applicable)</b>
        </span>{" "}
        <br /> <br />
        <span>
          If you haven’t received a refund yet, first login in you account again
          and check.
          <br />
          If you’ve done all of this and you still have not received your refund
          yet, please contact us at support@puremarty.site.
        </span>
        <br /> <br />
        <span>
          <b>Sale items (if applicable)</b>
        </span>{" "}
        <br /> <br />
        <span>
          Only regular priced items may be refunded, unfortunately on few item
          on a conveyed sale day cannot be refunded or returned.
        </span>
        <br /> <br />
        <span>
          <b>Exchanges (if applicable)</b>
        </span>{" "}
        <br /> <br />
        <span>
          We only replace items if they are defective or damaged or size doesn't
          fit well. If you need to exchange it for the same item, please login
          in your account and place an exchange request directly. There is no
          additional charge for any exchange orders. For new orders of lower
          price, the balance amount will be refunded as a gift voucher. <br />{" "}
          <br />
          Exchange of product is subjected to availability of size.
        </span>
        <br /> <br />
        <span>
          <b>Gifts</b>
        </span>{" "}
        <br /> <br />
        <span>
          If the item was marked as a gift when purchased and shipped directly
          to you, you’ll receive a gift credit for the value of your return.
          Once the returned item is received, a gift certificate will be mailed
          to you. <br /> <br />
          If the item wasn’t marked as a gift when purchased, or the gift giver
          had the order shipped to themselves to give to you later, we will send
          a refund to the gift giver and he will find out about your return.
        </span>
        <br /> <br />
        <span>
          <b>Shopping</b>
        </span>{" "}
        <br /> <br />
        <span>
          To return your product, you can directly do it through our return
          center. <br /> <br />
          Shipping costs are non-refundable. If you receive a refund, the cost
          of return shipping will be deducted from your refund. <br /> <br />
          Depending on where you live, the time it may take for your exchanged
          product to reach you, may vary.
        </span>
        <br /> <br />
        <span>
          <b>Self-Ship</b>
        </span>{" "}
        <br /> <br />
        <span>
          If your Pincode is not in the serviceable area i.e. if our delivery
          agents are not able to come for pick-up, the customer has to self-ship
          the product. The shipping charge will be refunded only if the customer
          provides the Docket Slip.
        </span>
        <br /> <br />
      <Newsletter/>
      </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Refundreturn;
