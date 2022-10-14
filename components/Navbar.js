import React, { useState, useEffect, useContext } from "react";
import { GoLocation } from "react-icons/go";
import { AiFillFacebook } from "react-icons/ai";

import NextLink from "next/link";
import classes from "../utils/classes";

import { Store } from "../utils/Store";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Badge,
  Box,
  Button,
  CssBaseline,
  Link,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
const Navbar = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    main: {
      width: "50vw",
    },
  });

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

  const [show, handleShow] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <nav className={`navbar ${show && "navbar__later"}`}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="logo">
                <NextLink href="/" passHref>
                  <Link>
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
                  <li>
                    <NextLink href="/" passHref>
                      <Link>
                        <a onClick={navHandler}>Start</a>
                      </Link>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/uloterapia" passHref>
                      <Link>
                        <a onClick={navHandler}>Uloterapia</a>
                      </Link>
                    </NextLink>
                  </li>

                  <li>
                    <a onClick={navHandler}>Kontakt</a>
                  </li>
                  <li onClick={navHandler}>
                    <NextLink href="/cart" passHref>
                      <Link>
                        {cart.cartItems.length > 0 ? (
                          <Badge
                            color="secondary"
                            badgeContent={cart.cartItems.length}
                          >
                            <a>Koszyk</a>
                          </Badge>
                        ) : (
                          "Koszyk"
                        )}
                      </Link>
                    </NextLink>
                  </li>
                  <li>
                    {userInfo ? (
                      <>
                        <Button
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
                          <MenuItem
                            onClick={(e) =>
                              loginMenuCloseHandler(e, "/profile")
                            }
                          >
                            Profil
                          </MenuItem>
                          <MenuItem
                            onClick={(e) =>
                              loginMenuCloseHandler(e, "/order-history")
                            }
                          >
                            Historia zamówień
                          </MenuItem>
                          <MenuItem onClick={logoutClickHandler}>
                            Wyloguj
                          </MenuItem>
                        </Menu>
                      </>
                    ) : (
                      <NextLink href="/login" passHref>
                        <Link>Zaloguj</Link>
                      </NextLink>
                    )}
                  </li>
                </ul>
                <ul style={{ display: "flex" }} className="navbar-social">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100063740554419"
                    >
                      <AiFillFacebook
                        style={{ fontSize: "22px", color: "#3b5998" }}
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#map">
                      <GoLocation style={{ fontSize: "22px" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
