import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Roman-Webfont";

export function SilkaThin() {
  return (
    <>
      <Head>
        <link
          key="SilkaThinLink"
          rel="preload"
          href={`${prefix}/silka-thin-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-thin-webfont.eot");
            src: url("${prefix}/silka-thin-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-thin-webfont.woff2") format("woff2"),
              url("${prefix}/silka-thin-webfont.woff") format("woff"),
              url("${prefix}/silka-thin-webfont.ttf") format("truetype");
            font-weight: 100;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
