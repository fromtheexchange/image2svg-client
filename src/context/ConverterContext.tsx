import React from "react";
import axios from "axios";
import { tracerOptions } from "../components/SelectTracer/SelectTracer";
import { demoUrl, demo } from "../components/Demo/Demo";

// ColorMode from servers
export enum ColorMode {
  COLOR = "color",
  BLACK_AND_WHITE = "black-and-white",
}

// for context autocompletion
interface ConverterContext {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File>>;
  tracer: string;
  setTracer: React.Dispatch<React.SetStateAction<string>>;
  isColorMode: boolean;
  setIsColorMode: React.Dispatch<React.SetStateAction<boolean>>;
  svg: string | null;
  setSvg: React.Dispatch<React.SetStateAction<string>>;
  fileUrl: string;
  isLoading: boolean;
  setError: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

const ConverterContext = React.createContext<ConverterContext | null>(null);
export default ConverterContext;

export function ConverterProvider({ children }: { children: React.ReactNode }) {
  const [file, setFile] = React.useState<File | null>();
  const [svg, setSvg] = React.useState<string | null>(demo.kvecColor);
  const [fileUrl, setFileUrl] = React.useState<string | null>(demoUrl);
  const [tracer, setTracer] = React.useState<string>(tracerOptions[0].value);
  const [isColorMode, setIsColorMode] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    // use and cache demo image
    if (!file) {
      // do not display demo if error
      if (fileUrl && !error) {
        const key = tracerOptions.find(
          (tracerOption) => tracerOption.value === tracer
        ).label;
        setSvg(demo[`${key}${isColorMode ? "Color" :"BlackAndWhite"}`]);
      }
      return;
    }

    // error if selected file too large
    if (file.size > 4928307) {
      setFileUrl(null);
      setSvg(null);
      setFile(null);
      // API Gateway payload limit is 6MB
      // Vercel limit is 5MG
      // 4.7 Megabytes to bytes
      setError("413 Payload Too Large. Max bytes 4928307.");
      return;
    }

    // fetch svg from server
    async function getSvg() {
      try {
        setSvg(null);
        setIsLoading(true);
        setError("");

        // make request to server with formData
        const formData = new FormData();
        formData.append("image", file, file.name);

        const response = await axios.post(
          `${tracer}/${isColorMode ? "color" :"black-and-white"}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setSvg(response.data.files[0].svg);
        setIsLoading(false);
      } catch (error) {
        // if error, stop loading and display message
        setError(error.message);
        setIsLoading(false);
      }
    }

    getSvg();
  }, [file, tracer, isColorMode]);

  // create object urls to display files
  React.useEffect(() => {
    if (file) {
      setFileUrl(URL.createObjectURL(file));
      setSvg(null);
    }
  }, [file]);

  // revoke object urls to avoid memory leaks
  React.useEffect(() => {
    return function cleanUp() {
      URL.revokeObjectURL(fileUrl);
    };
  }, [fileUrl]);

  // value for context
  const value = {
    file,
    setFile,
    tracer,
    setTracer,
    isColorMode,
    setIsColorMode,
    svg,
    setSvg,
    fileUrl,
    isLoading,
    error,
    setError,
  };

  return (
    <ConverterContext.Provider value={value}>
      {children}
    </ConverterContext.Provider>
  );
}
