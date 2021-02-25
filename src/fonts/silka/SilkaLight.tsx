import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Roman-Webfont";

export function SilkaLight() {
  return (
    <>
      <Head>
        <link
          key="SilkaLightLink"
          rel="preload"
          href={`${prefix}/silka-light-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-light-webfont.eot");
            src: url("${prefix}/silka-light-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-light-webfont.woff2") format("woff2"),
              url("${prefix}/silka-light-webfont.woff") format("woff"),
              url("${prefix}/silka-light-webfont.ttf") format("truetype");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
