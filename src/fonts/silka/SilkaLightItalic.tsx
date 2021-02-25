import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Italic-Webfont";

export function SilkaLightItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaLightItalicLink"
          rel="preload"
          href={`${prefix}/silka-lightitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-lightitalic-webfont.eot");
            src: url("${prefix}/silka-lightitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-lightitalic-webfont.woff2") format("woff2"),
              url("${prefix}/silka-lightitalic-webfont.woff") format("woff"),
              url("${prefix}/silka-lightitalic-webfont.ttf") format("truetype");
            font-weight: 300;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
