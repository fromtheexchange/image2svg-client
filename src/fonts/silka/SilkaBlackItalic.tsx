import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Italic-Webfont";

export function SilkaBlackItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaBlackItalicLink"
          rel="preload"
          href={`${prefix}/silka-blackitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-blackitalic-webfont.eot");
            src: url("${prefix}/silka-blackitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-blackitalic-webfont.woff2") format("woff2"),
              url("${prefix}/silka-blackitalic-webfont.woff") format("woff"),
              url("${prefix}/silka-blackitalic-webfont.ttf") format("truetype");
            font-weight: 900;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
