import React, { useState, useEffect, useContext } from "react";

import NextLink from "next/link";

import { Store } from "../utils/Store";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
import test from "../public/images/sz1391w500.png";
import { Badge, CssBaseline, Link } from "@mui/material";
const Navbar = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const logoutClickHandler = () => {
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
    <nav className={`navbar ${show && "navbar navbar__later"}`}>
      <CssBaseline />
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="logo">
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: "none" }}>
                  <h1
                    className={`nav-li-a ${show && "nav-li-a nav-li-active"}`}
                  >
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
            <div className="szybki">
              <Image src={test} alt="image" />
            </div>
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li>
                  <NextLink href="/" passHref>
                    <Link style={{ textDecoration: "none" }}>
                      <a
                        className={`nav-li-a ${
                          show && "nav-li-a nav-li-active"
                        }`}
                        onClick={navHandler}
                      >
                        Start
                      </a>
                    </Link>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/uloterapia" passHref>
                    <Link style={{ textDecoration: "none" }}>
                      <a
                        className={`nav-li-a ${
                          show && "nav-li-a nav-li-active"
                        }`}
                        onClick={navHandler}
                      >
                        Uloterapia
                      </a>
                    </Link>
                  </NextLink>
                </li>

                <li>
                  <NextLink href="/kontakt" passHref>
                    <Link style={{ textDecoration: "none" }}>
                      <a
                        className={`nav-li-a ${
                          show && "nav-li-a nav-li-active"
                        }`}
                        onClick={navHandler}
                      >
                        Kontakt
                      </a>
                    </Link>
                  </NextLink>
                </li>
                <li onClick={navHandler}>
                  <NextLink href="/cart" passHref>
                    <Link style={{ textDecoration: "none" }}>
                      {cart.cartItems.length > 0 ? (
                        <Badge badgeContent={cart.cartItems.length}>
                          <a
                            className={`nav-li-a ${
                              show && "nav-li-a nav-li-active"
                            }`}
                          >
                            Koszyk
                          </a>
                        </Badge>
                      ) : (
                        <a
                          className={`nav-li-a ${
                            show && "nav-li-a nav-li-active"
                          }`}
                        >
                          Koszyk
                        </a>
                      )}
                    </Link>
                  </NextLink>
                </li>
                <li>
                  {userInfo ? (
                    <ul className="navbar-nav">
                      <li onClick={navHandler}>
                        <NextLink href="/order-history" passHref>
                          <Link style={{ textDecoration: "none" }}>
                            <a
                              className={`nav-li-a ${
                                show && "nav-li-a nav-li-active"
                              }`}
                            >
                              Zamówienia
                            </a>
                          </Link>
                        </NextLink>
                      </li>
                      <li onClick={logoutClickHandler}>
                        <a
                          className={`nav-li-a ${
                            show && "nav-li-a nav-li-active"
                          }`}
                        >
                          Wyloguj
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <NextLink href="/login" passHref>
                      <Link style={{ textDecoration: "none" }}>
                        {" "}
                        <a
                          onClick={navHandler}
                          className={`nav-li-a ${
                            show && "nav-li-a nav-li-active"
                          }`}
                        >
                          Zaloguj
                        </a>
                      </Link>
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
