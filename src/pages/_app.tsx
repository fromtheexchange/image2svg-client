import React from "react";
import Head from "next/head";
import { GlobalStyles } from "twin.macro";
import { ConverterProvider } from "../context/ConverterContext";
import {
  // Silka
  SilkaRegular,
  SilkaMedium,
  SilkaBold,
  // Salome
  SalomeItalic,
} from "../fonts";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        {/* metatags.io */}
        <title>Image 2 SVG | Image Tracing and Vectorization</title>
        <meta
          name="title"
          content="Image 2 SVG | Image Tracing and Vectorization"
        />
        <meta
          name="description"
          content="Demo four image tracing algorithms—compare the results and pick the best one for your project. All the code is open source and available on GitHub."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://image2svg.fromthe.exchange/" />
        <meta
          property="og:title"
          content="Image 2 SVG | Image Tracing and Vectorization"
        />
        <meta
          property="og:description"
          content="Demo four image tracing algorithms—compare the results and pick the best one for your project. All the code is open source and available on GitHub."
        />
        <meta
          property="og:image"
          content="https://image2svg.fromthe.exchange/static/meta/preview.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://image2svg.fromthe.exchange/"
        />
        <meta
          property="twitter:title"
          content="Image 2 SVG | Image Tracing and Vectorization"
        />
        <meta
          property="twitter:description"
          content="Demo four image tracing algorithms—compare the results and pick the best one for your project. All the code is open source and available on GitHub."
        />
        <meta
          property="twitter:image"
          content="https://image2svg.fromthe.exchange/static/meta/preview.png"
        />

        {/* realfavicongenerator */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#46539d" />
        <meta name="msapplication-TileColor" content="#46539d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Fonts */}
      <SalomeItalic />
      <SilkaRegular />
      <SilkaMedium />
      <SilkaBold />

      <GlobalStyles />

      {/* providers and page component */}
      <ConverterProvider>
        <Component {...pageProps} />
      </ConverterProvider>
    </div>
  );
}
