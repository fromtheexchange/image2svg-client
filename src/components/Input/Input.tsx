import React from "react";
import "twin.macro";
import ConverterContext from "../../context/ConverterContext";
import { SelectTracer } from "../SelectTracer/SelectTracer";
import { FileInput } from "../FileInput/FileInput";
import { Operator } from "../Operator/Operator";
import { Button } from "../Button/Button";

const FILE_INPUT_ID = "file";
const FILE_LABEL_ID = "file-label";

export function Input() {
  const { fileUrl, isLoading } = React.useContext(ConverterContext);

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      tw="relative flex flex-col h-full p-16 bg-blue-gray-100 place-content-between"
    >
      <div>
        <label htmlFor={FILE_INPUT_ID}>
          {/* preview uploaded file */}
          {fileUrl && (
            <img
              tw="object-contain object-top w-full h-full max-h-96"
              src={fileUrl}
              alt="Uploaded file preview"
            />
          )}
        </label>
      </div>

      <div>
        <Operator
          isLoading={isLoading}
          tw="bottom-0 transform translate-x-1/2 translate-y-1/2 lg:right-0 right-1/2 lg:-translate-y-1/2 lg:top-1/2"
        />
        <FileInput id={FILE_INPUT_ID} labelId={FILE_LABEL_ID} />
        <label tw="flex flex-row pt-6 pb-3 space-x-2" htmlFor="tracer">
          <span tw="text-blue-gray-900">Tracing algorithm</span>
          <span tw="inline-grid w-6 h-6 rounded-full place-items-center bg-blue-gray-300">
            <a
              href="https://github.com/fromtheexchange/image2svg-awesome"
              target="_blank"
              rel="noopener noreferrer"
              tw="text-blue-gray-900"
              aria-label="Learn more about the tracing algorithms"
            >
              ?
            </a>
          </span>
        </label>

        <div tw="grid grid-rows-2 gap-4 sm:grid-rows-1 sm:grid-cols-2">
          <SelectTracer />
          <Button
            as="label"
            tw="bg-amber-400"
            iconSrc="/static/icons/icons8/iOS/warm-gray/icons8-upload.svg"
            iconAlt="Upload icon"
            htmlFor={FILE_INPUT_ID}
            id={FILE_LABEL_ID}
          >
            Image
          </Button>
        </div>
      </div>
    </form>
  );
}
