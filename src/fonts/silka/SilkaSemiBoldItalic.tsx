import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Italic-Webfont";

export function SilkaSemiBoldItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaSemiBoldItalicLink"
          rel="preload"
          href={`${prefix}/silka-semibolditalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-semibolditalic-webfont.eot");
            src: url("${prefix}/silka-semibolditalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-semibolditalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silka-semibolditalic-webfont.woff") format("woff"),
              url("${prefix}/silka-semibolditalic-webfont.ttf")
                format("truetype");
            font-weight: 600;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
