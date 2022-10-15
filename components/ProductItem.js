import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { urlForThumbnail } from "../utils/image";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card
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
            <h1
              style={{
                color: "rgba(222,151,9,255)",
                fontSize: "1.3rem",
                fontWeight: "500",
              }}
            >
              {product.name}
            </h1>
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
        <p style={{ color: "grey", fontSize: "1.5rem", margin: "0" }}>
          {product.price}zł
        </p>
        <Button
          size="small"
          style={{
            background: "rgba(222,151,9,255)",
            color: "white",
            borderRadius: "16px",
          }}
          onClick={() => addToCartHandler(product)}
        >
          Dodaj do koszyka
        </Button>
      </CardActions>
    </Card>
  );
}
