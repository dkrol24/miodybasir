import React from "react";
import bee from "../public/images/beemiody.png";
import logo from "../public/images/logomiody.png";
import hright from "../public/images/hright.png";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner-main">
      <div className="banner-text">
        <h1 className="banner-h1">Naturalne miody</h1>
        <h1 style={{ fontSize: "2rem" }} className="banner-h1">
          z własnej pasieki
        </h1>
        <p className="banner-p">
          Miód akacjowy, wielokwiatowy, rzepakowy czy miody spadziowe?
        </p>
        <p className="banner-p2">
          Wybór zależy od pożądanych rezultatów: zwiększona energia, złagodzony
          przebieg przeziębienia czy też zdrowszy żołącek. Istnieje wiele
          rodzajów miodów pszczelich i każdy z nich ma inną charakterystykę,
          właściwości odżywcze i walory lecznicze.
        </p>
        <p className="banner-p3">
          &quot;Gdy zginie ostatnia pszczoła na kuli ziemskiej, <br /> ludzkości
          zostanie tylko cztery lata życia&quot; <br /> A.Einstein
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          right: "150px",
          top: "150px",
          zIndex: "0",
        }}
      >
        <Image src={bee}></Image>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-7px",
          right: "0",
          zIndex: "1",
          overflow: "hidden",
        }}
      >
        <Image src={hright}></Image>
      </div>

      <div className="banner-logo">
        <Image src={logo}></Image>
      </div>
    </div>
  );
};

export default Banner;
