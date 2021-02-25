import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Italic-Webfont";

export function SilkaItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaItalicLink"
          rel="preload"
          href={`${prefix}/silka-regularitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-regularitalic-webfont.eot");
            src: url("${prefix}/silka-regularitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-regularitalic-webfont.woff2") format("woff2"),
              url("${prefix}/silka-regularitalic-webfont.woff") format("woff"),
              url("${prefix}/silka-regularitalic-webfont.ttf")
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
