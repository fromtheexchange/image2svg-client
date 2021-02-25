import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Salome/Salome-Complete-Webfont/Salome-Deco-Webfont";

export function SalomeDecoRegular() {
  return (
    <>
      <Head>
        <link
          key="SalomeDecoRegularLink"
          rel="preload"
          href={`${prefix}/salome_deco-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Salomé Deco";
            src: url("${prefix}/salome_deco-webfont.eot");
            src: url("${prefix}/salome_deco-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/salome_deco-webfont.woff2") format("woff2"),
              url("${prefix}/salome_deco-webfont.woff") format("woff"),
              url("${prefix}/salome_deco-webfont.ttf") format("truetype"),
              url("${prefix}/salome_deco-webfont.svg#salome_decoregular")
                format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
