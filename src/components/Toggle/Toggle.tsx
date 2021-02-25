import React from "react";
import tw from "twin.macro";
import ConverterContext from "../../context/ConverterContext";

// Borrowed from Tailwind UI
// https://tailwindui.com/components/application-ui/forms/toggles

export function Toggle() {
  const { isColorMode, setIsColorMode } = React.useContext(ConverterContext);

  return (
    <div tw="flex flex-row mb-3 space-x-2 place-items-center">
      <button
        id="color-mode"
        onClick={() => setIsColorMode((isColorMode) => !isColorMode)}
        type="button"
        className="group"
        tw="relative inline-flex items-center justify-center flex-shrink-0 w-10 h-5 rounded-full cursor-pointer focus:outline-none"
        // focus:ring-2 focus:ring-offset-2 focus:ring-amber-400
        aria-pressed={isColorMode}
      >
        <span tw="sr-only">Trace with colors</span>
        <span
          aria-hidden="true"
          tw="absolute w-full h-full bg-white rounded-md pointer-events-none"
        />
        <span
          css={[isColorMode ? tw`bg-amber-400` : tw`bg-blue-gray-200`]}
          aria-hidden="true"
          tw="absolute h-4 mx-auto transition-colors duration-200 ease-in-out rounded-full pointer-events-none w-9"
        />
        <span
          // due to bug, transition must be specified in css attribute, not tw attribute
          css={[
            isColorMode
              ? tw`transition-transform duration-200 ease-in-out transform translate-x-5`
              : tw`transition-transform duration-200 ease-in-out transform translate-x-0`,
          ]}
          aria-hidden="true"
          tw="absolute left-0 inline-block w-5 h-5 bg-white border rounded-full shadow pointer-events-none border-blue-gray-200 ring-0"
        />
      </button>
      <label htmlFor="color-mode" tw="cursor-pointer text-blue-gray-900">
        Trace with colors
      </label>
    </div>
  );
}
