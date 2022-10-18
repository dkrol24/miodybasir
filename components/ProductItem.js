import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { urlForThumbnail } from "../utils/image";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { portfolioAnimations } from "./animation";
export default function ProductItem({ product, addToCartHandler }) {
  const [element, controls] = useScroll();
  return (
    <Card
      ref={element}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: "515px",
        width: "100%",
        borderLeft: "1px dotted rgba(222,151,9,255)",
        borderRight: "1px dotted rgba(222,151,9,255)",
        boxShadow: "0 4px 30px rgba(222,151,9,0.1)",
      }}
    >
      <NextLink href={`/product/${product.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia
            style={{ padding: "3rem" }}
            component="img"
            image={urlForThumbnail(product.image)}
            title={product.name}
          ></CardMedia>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.h1
              variants={portfolioAnimations}
              animate={controls}
              transition={{
                delay: 0.1,
                type: "tween",
                duration: 0.5,
              }}
              style={{
                color: "rgba(222,151,9,255)",
                fontSize: "1.3rem",
                fontWeight: "500",
              }}
            >
              {product.name}
            </motion.h1>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          textAlign: "start",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <motion.p
          variants={portfolioAnimations}
          animate={controls}
          transition={{
            delay: 0.1,
            type: "tween",
            duration: 0.5,
          }}
          style={{ color: "grey", fontSize: "1.5rem", margin: "0" }}
        >
          {product.price}zł
        </motion.p>
        <motion.button
          variants={portfolioAnimations}
          animate={controls}
          transition={{
            delay: 0.1,
            type: "tween",
            duration: 0.5,
          }}
          style={{ width: "100%" }}
          className="yellow-button"
          onClick={() => addToCartHandler(product)}
        >
          <p>Dodaj do koszyka</p>
        </motion.button>
      </CardActions>
    </Card>
  );
}
