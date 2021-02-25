import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Roman-Webfont";

export function SilkaMedium() {
  return (
    <>
      <Head>
        <link
          key="SilkaMediumLink"
          rel="preload"
          href={`${prefix}/silka-medium-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-medium-webfont.eot");
            src: url("${prefix}/silka-medium-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-medium-webfont.woff2") format("woff2"),
              url("${prefix}/silka-medium-webfont.woff") format("woff"),
              url("${prefix}/silka-medium-webfont.ttf") format("truetype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
