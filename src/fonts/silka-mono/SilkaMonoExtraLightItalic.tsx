import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/italic-webfontkit";

export function SilkaMonoExtraLightItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoExtraLightItalicLink"
          rel="preload"
          href={`${prefix}/silkamono-extralightitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-extralightitalic-webfont.eot");
            src: url("${prefix}/silkamono-extralightitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-extralightitalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-extralightitalic-webfont.ttf")
                format("truetype");
            font-weight: 200;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
