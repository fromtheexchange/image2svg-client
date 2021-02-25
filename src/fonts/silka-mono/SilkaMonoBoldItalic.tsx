import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/italic-webfontkit";

export function SilkaMonoBoldItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoBoldItalicLink"
          rel="preload"
          href={`${prefix}/silkamono-bolditalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-bolditalic-webfont.eot");
            src: url("${prefix}/silkamono-bolditalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-bolditalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-bolditalic-webfont.ttf")
                format("truetype");
            font-weight: 700;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
