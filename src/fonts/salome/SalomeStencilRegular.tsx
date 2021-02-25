import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Salome/Salome-Complete-Webfont/Salome-Stencil-Regular-Webfont";

export function SalomeStencilRegular() {
  return (
    <>
      <Head>
        <link
          key="SalomeStencilRegularLink"
          rel="preload"
          href={`${prefix}/salome_stencil-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Salomé Stencil";
            src: url("${prefix}/salome_stencil-webfont.eot");
            src: url("${prefix}/salome_stencil-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/salome_stencil-webfont.woff2") format("woff2"),
              url("${prefix}/salome_stencil-webfont.woff") format("woff"),
              url("${prefix}/salome_stencil-webfont.ttf") format("truetype"),
              url("${prefix}/salome_stencil-webfont.svg#salome_stencilregular")
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
