import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/roman-webfontkit";

export function SilkaMonoThin() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoThinLink"
          rel="preload"
          href={`${prefix}/silkamono-thin-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-thin-webfont.eot");
            src: url("${prefix}/silkamono-thin-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-thin-webfont.woff2") format("woff2"),
              url("${prefix}/silkamono-thin-webfont.ttf") format("truetype");
            font-weight: 100;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
