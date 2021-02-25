import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/roman-webfontkit";

export function SilkaMonoSemiBold() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoSemiBoldLink"
          rel="preload"
          href={`${prefix}/silkamono-semibold-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-semibold-webfont.eot");
            src: url("${prefix}/silkamono-semibold-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-semibold-webfont.woff2") format("woff2"),
              url("${prefix}/silkamono-semibold-webfont.ttf") format("truetype");
            font-weight: 600;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
