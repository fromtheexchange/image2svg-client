import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Salome/Salome-Complete-Webfont/Salome-Fine-Regular-Webfont";

export function SalomeFineRegular() {
  return (
    <>
      <Head>
        <link
          key="SalomeFineRegularLink"
          rel="preload"
          href={`${prefix}/salome_fine-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Salomé Fine";
            src: url("${prefix}/salome_fine-webfont.eot");
            src: url("${prefix}/salome_fine-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/salome_fine-webfont.woff2") format("woff2"),
              url("${prefix}/salome_fine-webfont.woff") format("woff"),
              url("${prefix}/salome_fine-webfont.ttf") format("truetype"),
              url("${prefix}/salome_fine-webfont.svg#salome_fineregular")
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
