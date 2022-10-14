import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Head from "next/head";
import { createTheme } from "@mui/material/styles";
import classes from "../utils/classes";

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    main: {
      width: "50vw",
    },
  });
  return (
    <>
      <Head>
        <title>{title ? `${title} - Miody Konarscy` : "Miody Konarscy"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className={classes.main}>{children}</div>
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Miody Konarscy.</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
