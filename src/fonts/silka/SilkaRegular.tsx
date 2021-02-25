import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Roman-Webfont";

export function SilkaRegular() {
  return (
    <>
      <Head>
        <link
          key="SilkaRegularLink"
          rel="preload"
          href={`${prefix}/silka-regular-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-regular-webfont.eot");
            src: url("${prefix}/silka-regular-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-regular-webfont.woff2") format("woff2"),
              url("${prefix}/silka-regular-webfont.woff") format("woff"),
              url("${prefix}/silka-regular-webfont.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
