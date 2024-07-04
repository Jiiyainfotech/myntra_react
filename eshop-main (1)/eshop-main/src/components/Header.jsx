import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo-2.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/ProductContext";

const Header = () => {
  const { state } = useContext(AppContext);

  const navigate = useNavigate();

  const getCartdata = () => {};

  useEffect(() => {
    getCartdata();
  }, []);

  console.log("cart data", state?.cartData);

  return (
    <>
      <Box sx={{ flexGrow: 1, p: 0 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white" }}
          elevation={0}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              <img
                src={logo}
                alt="logo"
                width={180}
                onClick={() => {
                  navigate("/");
                }}
              />
            </Typography>
            <Button>
              <FavoriteBorderIcon style={{ color: "black" }} />
            </Button>
            <Badge badgeContent={state?.cartData?.length} color="primary">
            <ShoppingBagOutlinedIcon style={{ color: "black" }} />
            </Badge>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
