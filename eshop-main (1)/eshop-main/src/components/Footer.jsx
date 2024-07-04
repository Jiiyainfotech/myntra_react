import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from "react-router-dom";

const Footer = () => {


  const navigate = useNavigate();

  const menu1 = [
    {
      id: 1,
      icon: PersonOutlinedIcon,
      name: "My Account",
      text: "Find All Your Details Here",
    },
    {
      id: 2,
      icon: SyncAltOutlinedIcon,
      name: "Return & Exchanges",
      text: "Return & Exchanges on the full Site",
    },
    {
      id: 3,
      icon: Inventory2OutlinedIcon,
      name: "Order Tracking",
      text: "We'll always keep you updated'",
    },
  ];

  return (
    <>
      <Grid container sx={{ textAlign: "center", my: 2,p:{lg:'0px',sm:'5px',xs:'5px'} }}>
        {menu1.map((e,key) => (
          <Grid item lg={4} sm={4} md={4} xs={4}>
            <Box>
              <IconButton>
                <e.icon sx={{ fontSize: 30, color: "black" }} />
              </IconButton>

              <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                {e.name}
              </Typography>
              <span style={{ fontSize: "12px" }}>{e.text}</span>
            </Box>
          </Grid>
        ))}

        {/* Links  */}

        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          sx={{
            border: "1px solid gray",
            borderRadius: "5px",
            textAlign: "center",
            mt: 2,
          }}
        >
          <Typography
          onClick={()=>{navigate("/contact")}} 
            sx={{ color: "black", borderBottom: "1px solid gray", py: 2,cursor:'pointer' }}
          >
            Contact Us
          </Typography>
          <Typography  sx={{ color: "black" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Our Policy
              </AccordionSummary>
              <AccordionDetails>
                <Typography onClick={()=>{navigate('/refund-policy')}} sx={{ cursor:'pointer' }} >Refund Policy</Typography>
                <Typography onClick={()=>{navigate('/privacy-policy')}} sx={{ cursor:'pointer' }} >Privacy Policy</Typography>
                <Typography onClick={()=>{navigate('/shoppingpolicy')}} sx={{ cursor:'pointer' }}>Shopping Policy</Typography>
                <Typography onClick={()=>{navigate('/termsofservice')}} sx={{ cursor:'pointer' }}>Terms & Service</Typography>
              </AccordionDetails>
            </Accordion>
          </Typography>
          <Typography  sx={{ color: "black", py: 2 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Information
              </AccordionSummary>
              <AccordionDetails>
                <Typography onClick={()=>{navigate('/about')}} sx={{ cursor:'pointer' }}>About Us</Typography>
                <Typography onClick={()=>{navigate('/track')}} sx={{ cursor:'pointer' }}>Track Order</Typography>
                <Typography onClick={()=>{navigate('/faq')}} sx={{ cursor:'pointer' }}>Faq</Typography>
              </AccordionDetails>
            </Accordion>
          </Typography>
          <Typography
            sx={{ color: "black" }}
          >
            Follow Us
          </Typography>
          <Box>
            <FacebookIcon sx={{ fontSize:'40px',marginRight:'8px' }}/>
            <TwitterIcon sx={{ fontSize:'40px',marginRight:'8px' }}/>
            <InstagramIcon sx={{ fontSize:'40px',marginRight:'8px' }}/>
            <LinkedInIcon sx={{ fontSize:'40px' }}/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
