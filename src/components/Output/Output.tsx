import React from "react";
import "twin.macro";
import ConverterContext from "../../context/ConverterContext";
import { tracerOptions } from "../SelectTracer/SelectTracer";
import { Button } from "../Button/Button";
import { Toggle } from "../Toggle/Toggle";

export function Output() {
  const { svg, file, tracer, isColorMode, error } = React.useContext(
    ConverterContext
  );

  // get tracerName from html select value
  const tracerName = tracerOptions.find(
    (tracerOption) => tracerOption.value === tracer
  ).label;

  return (
    <div tw="flex flex-col h-full p-16 place-content-between">
      <output tw="h-full max-h-96">
        {error && (
          // show error, if one
          <div tw="px-6 py-6 mb-6 text-red-900 bg-red-200">
            <p tw="pb-1 font-bold">Whoops! Something went wrong…</p>
            <p tw="leading-relaxed">{error}</p>
          </div>
        )}
        {svg && (
          // preview output
          <img
            tw="object-contain object-top w-full h-full max-h-96"
            src={`data:image/svg+xml,${encodeURIComponent(svg)}`}
            alt="Image trace"
          />
        )}
      </output>
      <div tw="mt-4">
        <Toggle />
        {/* if svg, show download, else disable button */}
        {svg ? (
          <Button
            as="a"
            tw="bg-amber-400 text-warm-gray-900"
            iconSrc="/static/icons/icons8/iOS/warm-gray/icons8-download.svg"
            iconAlt="Download icon"
            href={`data:image/svg+xml,${encodeURIComponent(svg)}`}
            // remove file extension https://stackoverflow.com/a/4250408
            download={`${
              file?.name?.replace(/\.[^/.]+$/, "") || "demo"
            }-${tracerName}-${isColorMode ? "color" :"black-and-white"}.svg`}
          >
            Download
          </Button>
        ) : (
          <Button
            tw="cursor-not-allowed bg-blue-gray-300 text-blue-gray-900"
            iconSrc="/static/icons/icons8/iOS/blue-gray/icons8-download.svg"
            iconAlt="Download icon"
            disabled
          >
            Download
          </Button>
        )}
      </div>
    </div>
  );
}
