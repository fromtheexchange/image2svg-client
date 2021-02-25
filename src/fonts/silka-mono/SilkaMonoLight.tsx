import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/roman-webfontkit";

export function SilkaMonoLight() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoLightLink"
          rel="preload"
          href={`${prefix}/silkamono-light-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-light-webfont.eot");
            src: url("${prefix}/silkamono-light-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-light-webfont.woff2") format("woff2"),
              url("${prefix}/silkamono-light-webfont.ttf") format("truetype");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
