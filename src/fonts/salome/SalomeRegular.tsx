import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Salome/Salome-Complete-Webfont/Salome-Regular-Webfont";

export function SalomeRegular() {
  return (
    <>
      <Head>
        <link
          key="SalomeRegularLink"
          rel="preload"
          href={`${prefix}/salome-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Salomé";
            src: url("${prefix}/salome-webfont.eot");
            src: url("${prefix}/salome-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/salome-webfont.woff2") format("woff2"),
              url("${prefix}/salome-webfont.woff") format("woff"),
              url("${prefix}/salome-webfont.ttf") format("truetype"),
              url("${prefix}/salome-webfont.svg#salomeregular") format("svg");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
