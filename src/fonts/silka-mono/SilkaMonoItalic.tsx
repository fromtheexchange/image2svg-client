import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/italic-webfontkit";

export function SilkaMonoItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoItalicLink"
          rel="preload"
          href={`${prefix}/silkamono-regularitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-regularitalic-webfont.eot");
            src: url("${prefix}/silkamono-regularitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-regularitalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-regularitalic-webfont.ttf")
                format("truetype");
            font-weight: 400;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
