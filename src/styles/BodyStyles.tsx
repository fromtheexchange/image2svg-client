import React from "react";

// global styling for the body background colors

export function BodyBackgroundBlue() {
  return (
    <style global jsx>
      {`
        body {
          background-color: #46539d;
          min-height: 100vh;
        }
      `}
    </style>
  );
}

export function BodyBackgroundBlueGray() {
  return (
    <style global jsx>
      {`
        body {
          background-color: #f1f5f9;
          min-height: 100vh;
        }
      `}
    </style>
  );
}

export function BodyBackgroundWhite() {
  return (
    <style global jsx>
      {`
        body {
          background-color: #fff;
          min-height: 100vh;
        }
      `}
    </style>
  );
}
