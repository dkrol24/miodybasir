import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Naturalne miody w Warce</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="favicon.ico" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="description"
            content="naturalne miody warka miodek miód w warce"
            key="desc"
          />
          <meta name="robots" content="noodp" />
          <meta
            name="keywords"
            content="miód, miody, warka, konarscy,konarski,miody warka,miody w warce,naturalny miód, naturalne miody"
          />
          <meta name="googlebot" content="noodp" />
          <meta property="og:title" content="Naturalne miody w Warce" />
          <meta
            property="og:description"
            content="naturalne miody warka miodek miód w warce"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createCache({ key: "css" });
  const { extractCriticalToChunks } = createEmotionServer(cache);
  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
    });
  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
