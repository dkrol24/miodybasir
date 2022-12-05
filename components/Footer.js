import React from "react";
import { Link } from "@mui/material";
import NextLink from "next/link";
const Footer = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div className="footer-down">
        <div className="footer-column">
          <NextLink href="/regulamin" passHref>
            <Link
              style={{ textDecoration: "none", color: "rgba(222,151,9,255)" }}
            >
              Regulamin
            </Link>
          </NextLink>
        </div>
        <div className="footer-column">
          <NextLink href="/Privacy" passHref>
            <Link
              style={{ textDecoration: "none", color: "rgba(222,151,9,255)" }}
            >
              Polityka prywatności
            </Link>
          </NextLink>
        </div>
        <div className="footer-column">
          <NextLink href="/Sklep" passHref>
            <Link
              style={{ textDecoration: "none", color: "rgba(222,151,9,255)" }}
            >
              Sklep
            </Link>
          </NextLink>
        </div>
      </div>
      <div className="footer-down">
        <div className="footer-column">
          <p style={{ color: "rgba(222,151,9,255)" }}>
            Elizy Orzeszkowej 2A, 05-660 Warka
          </p>
        </div>
        <div className="footer-column">
          <p style={{ color: "rgba(222,151,9,255)" }}>Adres e-mail</p>
        </div>
        <div className="footer-column">
          <NextLink href="https://www.instagram.com/instagiusto/" passHref>
            <a target="_blank" style={{ color: "rgba(222,151,9,255)" }}>
              Facebook
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
