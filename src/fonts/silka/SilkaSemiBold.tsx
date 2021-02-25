import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Roman-Webfont";

export function SilkaSemiBold() {
  return (
    <>
      <Head>
        <link
          key="SilkaSemiBoldLink"
          rel="preload"
          href={`${prefix}/silka-semibold-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-semibold-webfont.eot");
            src: url("${prefix}/silka-semibold-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-semibold-webfont.woff2") format("woff2"),
              url("${prefix}/silka-semibold-webfont.woff") format("woff"),
              url("${prefix}/silka-semibold-webfont.ttf") format("truetype");
            font-weight: 600;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
