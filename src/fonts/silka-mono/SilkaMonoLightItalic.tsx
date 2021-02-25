import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/italic-webfontkit";

export function SilkaMonoLightItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoLightItalicLink"
          rel="preload"
          href={`${prefix}/silkamono-lightitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-lightitalic-webfont.eot");
            src: url("${prefix}/silkamono-lightitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-lightitalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-lightitalic-webfont.ttf")
                format("truetype");
            font-weight: 300;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
