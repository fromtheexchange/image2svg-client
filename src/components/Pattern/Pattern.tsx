import React from "react";
import { css } from "twin.macro";

// fullscreen pattern, with className overrides

const background = css`
  background-image: url("/static/patterns/doubs-blue.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const zIndex = css`
  z-index: -10;
`;

interface PatternProps {
  className?: string;
}
export function Pattern({ className }: PatternProps) {
  return (
    <div className={className} css={[background, zIndex]} tw="fixed inset-0" />
  );
}
