import React from "react";
import "twin.macro";
import ConverterContext from "../../context/ConverterContext";

// URLs for development and production
const isDev = () => process.env.NODE_ENV === "development";
export const tracerOptions = [
  {
    label: "kvec",
    value: isDev()
      ? "http://localhost:4003/kvec" :"https://image2svg-kvec.fromtheexchange.cloud/kvec",
  },
  {
    label: "imagetracerjs",
    value: isDev()
      ? "http://localhost:4002/imagetracerjs" :"https://image2svg-imagetracerjs.fromtheexchange.cloud/imagetracerjs",
  },
  {
    label: "potrace",
    value: isDev()
      ? "http://localhost:4001/potrace" :"https://image2svg-potrace.fromtheexchange.cloud/potrace",
  },
  {
    label: "primitive",
    value: isDev()
      ? "http://localhost:4004/primitive" :"https://image2svg-primitive.fromtheexchange.cloud/primitive",
  },
];

export function SelectTracer() {
  const { tracer, setTracer } = React.useContext(ConverterContext);
  return (
    // Controlled select component
    // https://reactjs.org/docs/forms.html#the-select-tag
    <select
      value={tracer}
      onChange={(event) => setTracer(event.target.value)}
      id="tracer"
      name="tracer"
      tw="border-none cursor-pointer bg-blue-gray-300 text-blue-gray-900"
    >
      {tracerOptions.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
