import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Italic-Webfont";

export function SilkaThinItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaThinItalicLink"
          rel="preload"
          href={`${prefix}/silka-thinitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-thinitalic-webfont.eot");
            src: url("${prefix}/silka-thinitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-thinitalic-webfont.woff2") format("woff2"),
              url("${prefix}/silka-thinitalic-webfont.woff") format("woff"),
              url("${prefix}/silka-thinitalic-webfont.ttf") format("truetype");
            font-weight: 100;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
