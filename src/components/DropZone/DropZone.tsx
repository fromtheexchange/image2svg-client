import React from "react";
import { css } from "twin.macro";
import { Pattern } from "../Pattern/Pattern";
import ConverterContext from "../../context/ConverterContext";
import { acceptMimeTypes } from "../FileInput/FileInput";

// DND tutorial
// - edited for full screen
// - updated for react hooks
// https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929

export function DropZone() {
  const [isDragging, setIsDragging] = React.useState(false);
  const dragCounter = React.useRef(0);

  const { setFile, setError, setSvg } = React.useContext(ConverterContext);

  const handleDrag = React.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);
  const handleDragIn = React.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current++;
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);
  const handleDragOut = React.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current > 0) return;
    setIsDragging(false);
  }, []);
  const handleDrop = React.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      dragCounter.current = 0;
      if (acceptMimeTypes.includes(event.dataTransfer.files[0].type)) {
        setFile(event.dataTransfer.files[0]);
      } else {
        setSvg(null);
        setFile(null);
        setError("415 Unsupported Media Type");
      }
      event.dataTransfer.clearData();
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("dragenter", handleDragIn);
    window.addEventListener("dragleave", handleDragOut);
    window.addEventListener("dragover", handleDrag);
    window.addEventListener("drop", handleDrop);
    return function cleanUp() {
      window.removeEventListener("dragenter", handleDragIn);
      window.removeEventListener("dragleave", handleDragOut);
      window.removeEventListener("dragover", handleDrag);
      window.removeEventListener("drop", handleDrop);
    };
  });

  return isDragging ? (
    // Overlay drag and drop interface
    <div tw="fixed inset-0 z-30 p-8 pointer-events-none">
      <Pattern />
      {/* TODO: keep scroll position https://stackoverflow.com/a/45230674 */}
      <style jsx global>
        {`
          body {
            position: fixed;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        `}
      </style>
      <div tw="relative grid w-full h-full place-items-center">
        <Border />
        <h3 tw="text-6xl italic text-center text-white font-display">
          Drop image
        </h3>
      </div>
    </div>
  ) : (
    <React.Fragment />
  );
}

// border https://kovart.github.io/dashed-border-generator/
// animation https://css-tricks.com/svg-line-animation-works/

const animation = css`
  animation: dash 5s linear;
  animation-iteration-count: infinite;
`;
const keyframes = css`
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

function Border() {
  return (
    <svg
      tw="absolute inset-0"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        css={[keyframes, animation]}
        width="100%"
        height="100%"
        fill="none"
        stroke="#FFF"
        strokeWidth="8"
        strokeDasharray="50"
        strokeDashoffset="1000"
        strokeLinecap="square"
      />
    </svg>
  );
}
