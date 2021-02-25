import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/roman-webfontkit";

export function SilkaMonoBlack() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoBlackLink"
          rel="preload"
          href={`${prefix}/silkamono-black-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-black-webfont.eot");
            src: url("${prefix}/silkamono-black-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-black-webfont.woff2") format("woff2"),
              url("${prefix}/silkamono-black-webfont.ttf") format("truetype");
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
