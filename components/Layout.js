import { Box, CssBaseline } from "@mui/material";
import Head from "next/head";
import classes from "../utils/classes";
import Footer from "../components/Footer";
export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Miody Konarscy` : "Miody Konarscy"}</title>

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
