import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/italic-webfontkit";

export function SilkaMonoBlackItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoBlackItalicLink"
          rel="preload"
          href={`${prefix}/silkamono-blackitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-blackitalic-webfont.eot");
            src: url("${prefix}/silkamono-blackitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-blackitalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-blackitalic-webfont.ttf")
                format("truetype");
            font-weight: 900;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
