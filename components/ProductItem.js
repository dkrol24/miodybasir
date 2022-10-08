import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { urlForThumbnail } from "../utils/image";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card
      style={{
        minHeight: "400px",
        boxShadow: "0 4px 30px rgba(0, 0, 0,0.5)",
      }}
    >
      <NextLink href={`/product/${product.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlForThumbnail(product.image)}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>${product.price}</Typography>
        <Button
          size="small"
          color="primary"
          onClick={() => addToCartHandler(product)}
        >
          Add to carts
        </Button>
      </CardActions>
    </Card>
  );
}
