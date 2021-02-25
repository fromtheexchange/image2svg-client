import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Salome/Salome-Complete-Webfont/Salome-Italic-Webfont";

export function SalomeItalic() {
  return (
    <>
      <Head>
        <link
          key="SalomeItalicLink"
          rel="preload"
          href={`${prefix}/salome_italic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Salomé";
            src: url("${prefix}/salome_italic-webfont.eot");
            src: url("${prefix}/salome_italic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/salome_italic-webfont.woff2") format("woff2"),
              url("${prefix}/salome_italic-webfont.woff") format("woff"),
              url("${prefix}/salome_italic-webfont.ttf") format("truetype"),
              url("${prefix}/salome_italic-webfont.svg#salomeitalic")
                format("svg");
            font-weight: 400;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
