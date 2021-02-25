import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/roman-webfontkit";

export function SilkaMonoRegular() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoRegularLink"
          rel="preload"
          href={`${prefix}/silkamono-regular-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-regular-webfont.eot");
            src: url("${prefix}/silkamono-regular-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-regular-webfont.woff2") format("woff2"),
              url("${prefix}/silkamono-regular-webfont.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
