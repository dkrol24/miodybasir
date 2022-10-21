import React from "react";
import bee from "../public/images/beemiody.png";
import logo from "../public/images/logomiody.png";
import hright from "../public/images/hright.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner-main">
      <div className="banner-top">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="banner-text"
        >
          <h1 className="banner-h1">Naturalne miody</h1>
          <h2 className="banner-h2">z własnej pasieki</h2>
          <p className="banner-p">
            Miód akacjowy, wielokwiatowy, rzepakowy czy miody spadziowe?
          </p>
          <p className="banner-p2">
            Wybór zależy od pożądanych rezultatów: zwiększona energia,
            złagodzony przebieg przeziębienia czy też zdrowszy żołądek. Istnieje
            wiele rodzajów miodów pszczelich i każdy z nich ma inną
            charakterystykę, właściwości odżywcze i walory lecznicze.
          </p>
          <p className="banner-p3">
            &quot;Gdy zginie ostatnia pszczoła na kuli ziemskiej, <br />{" "}
            ludzkości zostanie tylko cztery lata życia&quot; <br /> A.Einstein
          </p>
        </motion.div>
        <motion.div
          className="banner-bee"
          initial={{
            y: 200,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Image alt="miodykonarscy" src={bee}></Image>
        </motion.div>
      </div>
      <div className="banner-down">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="banner-logo"
        >
          <Image alt="miodykonarscy" src={logo}></Image>
        </motion.div>
        <div className="banner-hright">
          <Image alt="miodykonarscy" src={hright}></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
