import { Card, CardActions, CardContent } from "@mui/material";
import NextLink from "next/link";
import React from "react";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card
      style={{
        justifyContent: "space-between",
        display: "flex",
        boxShadow: "0 4px 5px rgba(0, 0, 0, 0.8)",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
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
