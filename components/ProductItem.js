import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { urlForThumbnail } from "../utils/image";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        display: "flex",
        boxShadow: "0 4px 5px rgba(0, 0, 0, 0.8)",
        flexDirection: "column",
      }}
    >
      <div>
        <CardMedia
          style={{
            maxWidth: "330px",
            height: "270px",
            padding: "0.5rem",
          }}
          component="img"
          image={urlForThumbnail(product.image)}
          title={product.name}
        ></CardMedia>
        <CardContent style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "1.2rem",
              margin: "0",
              padding: "0",
              fontWeight: "600",
              color: "rgba(222,151,9,255)",
            }}
          >
            {product.name}
          </p>
        </CardContent>
      </div>

      <CardActions style={{ justifyContent: "center" }}>
        <p
          style={{
            fontWeight: "400",

            margin: "0",
            padding: "0",
          }}
        >
          {product.price}zł
        </p>
      </CardActions>
      <CardActions
        style={{
          width: "100%",
          padding: "0.2rem",
          margin: "0 0 0 0",
        }}
      >
        <button
          className="product-button"
          onClick={() => addToCartHandler(product)}
        >
          <p style={{ fontWeight: "400" }}>Do koszyka</p>
        </button>
        <NextLink href={`/product/${product.slug.current}`} passHref>
          <button className="product-button">
            <p style={{ fontWeight: "300" }}>Opis</p>
          </button>
        </NextLink>
      </CardActions>
    </Card>
  );
}
