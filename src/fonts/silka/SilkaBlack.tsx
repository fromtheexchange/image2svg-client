import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Roman-Webfont";

export function SilkaBlack() {
  return (
    <>
      <Head>
        <link
          key="SilkaBlackLink"
          rel="preload"
          href={`${prefix}/silka-black-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-black-webfont.eot");
            src: url("${prefix}/silka-black-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-black-webfont.woff2") format("woff2"),
              url("${prefix}/silka-black-webfont.woff") format("woff"),
              url("${prefix}/silka-black-webfont.ttf") format("truetype");
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
