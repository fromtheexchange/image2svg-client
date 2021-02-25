import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/roman-webfontkit";

export function SilkaMonoBold() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoBoldLink"
          rel="preload"
          href={`${prefix}/silkamono-bold-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-bold-webfont.eot");
            src: url("${prefix}/silkamono-bold-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-bold-webfont.woff2") format("woff2"),
              url("${prefix}/silkamono-bold-webfont.ttf") format("truetype");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
