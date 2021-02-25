import React from "react";
import Head from "next/head";

const prefix =
  "/static/fonts/atipo-font-collection/webfont/Silka-Mono/italic-webfontkit";

export function SilkaMonoMediumItalic() {
  return (
    <>
      <Head>
        <link
          key="SilkaMonoMediumItalicLink"
          rel="preload"
          href={`${prefix}/silkamono-mediumitalic-webfont.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <style global jsx>
        {`
          @font-face {
            font-family: "Silka Mono";
            src: url("${prefix}/silkamono-mediumitalic-webfont.eot");
            src: url("${prefix}/silkamono-mediumitalic-webfont.eot?#iefix")
                format("embedded-opentype"),
              url("${prefix}/silkamono-mediumitalic-webfont.woff2")
                format("woff2"),
              url("${prefix}/silkamono-mediumitalic-webfont.ttf")
                format("truetype");
            font-weight: 500;
            font-style: italic;
            font-display: swap;
          }
        `}
      </style>
    </>
  );
}
