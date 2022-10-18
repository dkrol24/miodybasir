import React, { useState, useEffect, useContext } from "react";
import { GoLocation } from "react-icons/go";
import { AiFillFacebook } from "react-icons/ai";

import NextLink from "next/link";
import classes from "../utils/classes";

import { Store } from "../utils/Store";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";

import { Badge, Button, CssBaseline, Link, Menu } from "@mui/material";
const Navbar = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const [anchorEl, setAnchorEl] = useState(null);
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    jsCookie.remove("userInfo");
    jsCookie.remove("cartItems");
    jsCookie.remove("shippingAddress");
    jsCookie.remove("paymentMethod");
    router.push("/");
  };

  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav className="navbar">
      <CssBaseline />
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignContent: "center",

          padding: "1rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center",

            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",

              overflow: "hidden",
            }}
          >
            <div className="logo">
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: "none" }}>
                  <h1 style={{ color: "rgba(222,151,9,255)" }}>
                    Miody Konarscy
                  </h1>
                </Link>
              </NextLink>
            </div>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li style={{ margin: "0 1rem 0 0", padding: "0" }}>
                  <NextLink href="/" passHref>
                    <Link style={{ textDecoration: "none" }}>
                      <a onClick={navHandler}>Start</a>
                    </Link>
                  </NextLink>
                </li>
                <li style={{ margin: "0 1rem 0 0", padding: "0" }}>
                  <NextLink href="/uloterapia" passHref>
                    <Link style={{ textDecoration: "none" }}>
                      <a onClick={navHandler}>Uloterapia</a>
                    </Link>
                  </NextLink>
                </li>

                <li style={{ margin: "0 1rem 0 0", padding: "0" }}>
                  <a href="/kontakt" onClick={navHandler}>
                    Kontakt
                  </a>
                </li>
                <li
                  style={{ margin: "0 1rem 0 0", padding: "0" }}
                  onClick={navHandler}
                >
                  <NextLink href="/cart" passHref>
                    <Link style={{ textDecoration: "none" }}>
                      {cart.cartItems.length > 0 ? (
                        <Badge badgeContent={cart.cartItems.length}>
                          <a>Koszyk</a>
                        </Badge>
                      ) : (
                        "Koszyk"
                      )}
                    </Link>
                  </NextLink>
                </li>
                <li style={{ margin: "0 1rem 0 0", padding: "0" }}>
                  {userInfo ? (
                    <>
                      <Button
                        style={{ color: "black" }}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        sx={classes.navbarButton}
                        onClick={loginClickHandler}
                      >
                        {userInfo.name}
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={loginMenuCloseHandler}
                      >
                        <li
                          style={{
                            margin: "0 1rem 0 0",
                            padding: "0",
                          }}
                          onClick={(e) => loginMenuCloseHandler(e, "/profile")}
                        >
                          Profil
                        </li>
                        <li
                          style={{ margin: "0 1rem 0 0", padding: "0" }}
                          onClick={(e) =>
                            loginMenuCloseHandler(e, "/order-history")
                          }
                        >
                          Historia zamówień
                        </li>
                        <li
                          style={{ margin: "0 1rem 0 0", padding: "0" }}
                          onClick={logoutClickHandler}
                        >
                          Wyloguj
                        </li>
                      </Menu>
                    </>
                  ) : (
                    <NextLink href="/login" passHref>
                      <Link style={{ textDecoration: "none" }}>Zaloguj</Link>
                    </NextLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
