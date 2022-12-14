import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <title>Naturalne miody w Warce</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://miodykonarscy.pl/" />
          <link rel="icon" href="favicon.ico" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="description"
            content="Naturalne miody
            z własnej pasieki w warce
            Miód akacjowy, wielokwiatowy, rzepakowy czy miody spadziowe?
            
            Wybór zależy od pożądanych rezultatów: zwiększona energia, złagodzony przebieg przeziębienia czy też zdrowszy żołądek. Istnieje wiele rodzajów miodów pszczelich i każdy z nich ma inną charakterystykę, właściwości odżywcze i walory lecznicze."
            key="desc"
          />
          <meta
            name="og:description"
            content="Naturalne miody
            z własnej pasieki w warce
            Miód akacjowy, wielokwiatowy, rzepakowy czy miody spadziowe?
            
            Wybór zależy od pożądanych rezultatów: zwiększona energia, złagodzony przebieg przeziębienia czy też zdrowszy żołądek. Istnieje wiele rodzajów miodów pszczelich i każdy z nich ma inną charakterystykę, właściwości odżywcze i walory lecznicze."
          />
          <meta name="og:url" content="https://miodykonarscy.pl/" />
          <meta name="og:locale" content="pl_PL" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Miody Konarscy" />
          <meta name="robots" content="noodp" />
          <meta name="keywords" content="miody,miód,warka,konarscy" />
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
