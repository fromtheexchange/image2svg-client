import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/roman-webfontkit";

export function SilkaMonoMedium() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoMediumLink"
          rel="preload"
          href={`${prefix}/silkamono-medium-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-medium-webfont.eot");
            src: url("${prefix}/silkamono-medium-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-medium-webfont.woff2") format("woff2"),
              url("${prefix}/silkamono-medium-webfont.ttf") format("truetype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
