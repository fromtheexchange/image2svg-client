import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Roman-Webfont";

export function SilkaBold() {
  return (
    <>
      <Head>
        <link
          key="SilkaBoldLink"
          rel="preload"
          href={`${prefix}/silka-bold-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-bold-webfont.eot");
            src: url("${prefix}/silka-bold-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-bold-webfont.woff2") format("woff2"),
              url("${prefix}/silka-bold-webfont.woff") format("woff"),
              url("${prefix}/silka-bold-webfont.ttf") format("truetype");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
