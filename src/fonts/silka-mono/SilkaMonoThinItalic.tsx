import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/italic-webfontkit";

export function SilkaMonoThinItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoThinItalicLink"
          rel="preload"
          href={`${prefix}/silkamono-thinitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-thinitalic-webfont.eot");
            src: url("${prefix}/silkamono-thinitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-thinitalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-thinitalic-webfont.ttf")
                format("truetype");
            font-weight: 100;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
