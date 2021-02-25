import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka/Silka-Italic-Webfont";

export function SilkaMediumItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMediumItalicLink"
          rel="preload"
          href={`${prefix}/silka-mediumitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka";
            src: url("${prefix}/silka-mediumitalic-webfont.eot");
            src: url("${prefix}/silka-mediumitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silka-mediumitalic-webfont.woff2") format("woff2"),
              url("${prefix}/silka-mediumitalic-webfont.woff") format("woff"),
              url("${prefix}/silka-mediumitalic-webfont.ttf") format("truetype");
            font-weight: 500;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
