import React from "react";
import { css } from "twin.macro";
import { BodyBackgroundBlue } from "../styles/BodyStyles";
import { Pattern } from "../components/Pattern/Pattern";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import { Output } from "../components/Output/Output";
import { DropZone } from "../components/DropZone/DropZone";

const largeBoxShadow = css`
  box-shadow: 0px 16px 32px rgba(49, 62, 108, 0.25);
`;
const ligatures = css`
  font-variant-ligatures: discretionary-ligatures;
`;

export default function Home() {
  return (
    // page padding
    <div tw="max-w-screen-xl p-8 mx-auto xl:px-24">
      <div tw="container mx-auto">
        <BodyBackgroundBlue />

        <Pattern />

        <DropZone />

        <Header />

        {/* Main Content */}
        <main tw="max-w-xl mx-auto lg:max-w-none">
          <h1
            css={ligatures}
            tw="pb-8 text-6xl italic text-center text-white lg:pb-12 lg:pt-8 font-display lg:text-left"
          >
            Image 2 SVG
            {/* & html entity encoded is &amp; */}
            <span tw="hidden mt-2 lg:block">Tracing &amp; vectorization</span>
          </h1>
          <section tw="grid bg-white lg:grid-cols-2" css={largeBoxShadow}>
            <Input />
            <Output />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
