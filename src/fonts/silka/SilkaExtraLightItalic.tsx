import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Italic-Webfont";

export function SilkaExtraLightItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaExtraLightItalicLink"
          rel="preload"
          href={`${prefix}/silka-extralightitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-extralightitalic-webfont.eot");
            src: url("${prefix}/silka-extralightitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-extralightitalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silka-extralightitalic-webfont.woff")
                format("woff"),
              url("${prefix}/silka-extralightitalic-webfont.ttf")
                format("truetype");
            font-weight: 200;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
