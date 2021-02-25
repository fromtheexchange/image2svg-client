import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/roman-webfontkit";

export function SilkaMonoExtraLight() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoExtraLightLink"
          rel="preload"
          href={`${prefix}/silkamono-extralight-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-extralight-webfont.eot");
            src: url("${prefix}/silkamono-extralight-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-extralight-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-extralight-webfont.ttf")
                format("truetype");
            font-weight: 200;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
