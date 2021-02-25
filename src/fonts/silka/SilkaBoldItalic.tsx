import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Italic-Webfont";

export function SilkaBoldItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaBoldItalicLink"
          rel="preload"
          href={`${prefix}/silka-bolditalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-bolditalic-webfont.eot");
            src: url("${prefix}/silka-bolditalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-bolditalic-webfont.woff2") format("woff2"),
              url("${prefix}/silka-bolditalic-webfont.woff") format("woff"),
              url("${prefix}/silka-bolditalic-webfont.ttf") format("truetype");
            font-weight: 700;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
