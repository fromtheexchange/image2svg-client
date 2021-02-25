import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/italic-webfontkit";

export function SilkaMonoSemiBoldItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoSemiBoldItalicLink"
          rel="preload"
          href={`${prefix}/silkamono-semibolditalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-semibolditalic-webfont.eot");
            src: url("${prefix}/silkamono-semibolditalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-semibolditalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-semibolditalic-webfont.ttf")
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
