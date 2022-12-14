import { Box, CssBaseline } from "@mui/material";
import Head from "next/head";
import classes from "../utils/classes";
import Footer from "../components/Footer";
export default function Layout({ title, description, children, name }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Miody Konarscy` : "Miody Konarscy"}</title>
        <meta
          property="og:title"
          content={`Naturalne miody w Warce - ${title}`}
        />
        <meta name="og:locale" content="pl_PL" />
        {name && <meta name="og:title" content={name}></meta>}
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
        <Footer />
      </Box>
    </>
  );
}
