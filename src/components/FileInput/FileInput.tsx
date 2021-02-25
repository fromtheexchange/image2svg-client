import React from "react";
import "twin.macro";
import ConverterContext from "../../context/ConverterContext";

// MimeTypes supported by server
export const acceptMimeTypes = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "image/heic",
];

/**
 * Forms should not have multiple labels for accessibility
 * https://web.dev/form-field-multiple-labels/
 * https://stackoverflow.com/questions/2829936/can-an-input-field-have-two-labels
 * However, you can use "aria-labelledby" to associate the form element with a separate element using its ID
 */

interface FormInputProps {
  id: string;
  labelId: string;
}
export function FileInput({ id, labelId }: FormInputProps) {
  const { setFile } = React.useContext(ConverterContext);

  return (
    <>
      {/* Accessible file input styling */}
      {/* https://www.benmarshall.me/styling-file-inputs/ */}
      <style jsx>
        {`
          [type="file"] {
            border: 0;
            clip: rect(0, 0, 0, 0);
            height: 1px;
            overflow: hidden;
            padding: 0;
            position: absolute !important;
            white-space: nowrap;
            width: 1px;
          }

          [type="file"] + label {
            /* File upload button styles */
          }

          [type="file"]:focus + label,
          [type="file"] + label:hover {
            /* File upload hover state button styles */
          }

          [type="file"]:focus + label {
            /* File upload focus state button styles */
          }
        `}
      </style>
      <input
        id={id}
        name={id}
        type="file"
        // multiple
        aria-labelledby={labelId}
        accept={acceptMimeTypes.join(", ")}
        onChange={(event) => {
          const files = Array.from(event.target.files);
          // only setFile if file is selected
          if (files?.length) {
            // only select first file if multiple files are selected
            setFile(files[0]);
          }
        }}
        required
      />
    </>
  );
}
