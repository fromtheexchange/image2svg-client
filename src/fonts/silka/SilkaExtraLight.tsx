import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Roman-Webfont";

export function SilkaExtraLight() {
  return (
    <>
      <Head>
        <link
          key="SilkaExtraLightLink"
          rel="preload"
          href={`${prefix}/silka-extralight-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-extralight-webfont.eot");
            src: url("${prefix}/silka-extralight-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-extralight-webfont.woff2") format("woff2"),
              url("${prefix}/silka-extralight-webfont.woff") format("woff"),
              url("${prefix}/silka-extralight-webfont.ttf") format("truetype");
            font-weight: 200;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
