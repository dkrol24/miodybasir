import { Box, CssBaseline, Typography } from "@mui/material";
import Head from "next/head";

import classes from "../utils/classes";
import favicon from "../public/images/logomiody.png";
export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Miody Konarscy` : "Miody Konarscy"}</title>
        <link rel="favicon" href={favicon} />
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <CssBaseline />

      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        {children}
      </div>
      <Box component="footer" sx={classes.footer}>
        <Typography>All rights reserved. Miody Konarscy.</Typography>
      </Box>
    </>
  );
}
