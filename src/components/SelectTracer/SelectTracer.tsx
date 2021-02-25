import React from "react";
import "twin.macro";
import ConverterContext from "../../context/ConverterContext";

// URLs for development and production
const isDev = () => process.env.NODE_ENV === "development";
export const tracerOptions = [
  {
    label: "kvec",
    value: isDev()
      ? "http://localhost:4003/kvec"
      : "https://image2svg-kvec.vercel.app/kvec",
  },
  {
    label: "imagetracerjs",
    value: isDev()
      ? "http://localhost:4002/imagetracerjs"
      : "https://image2svg-imagetracerjs.vercel.app/imagetracerjs",
  },
  {
    label: "potrace",
    value: isDev()
      ? "http://localhost:4001/potrace"
      : "https://image2svg-potrace.vercel.app/potrace",
    demo: `<svg width="528" height="390" xmlns="http://www.w3.org/2000/svg"><path fill="#000" stroke="#000" d="M39.5 56l31 1 1 1h8l4 2 11 2q24.8 8.7 39.5 27.5 16.3 19.2 27 44L210.5 246l40.5-96.5-19-41-11-18L208.5 77q-6.7-7.2-18.5-8V57h12.5l1-1h19l1 1h10l1 1 11 1 23 7q21.7 9.3 35.5 26.5l10 13 16 30L382.5 251l74-189h30l.5 2.5L378 350h-27.5l-1.5-1.5L271.5 182 205 344.5l-3.5 5.5h-26l-.5-1.5-100-224Q65 101.3 51 83L37.5 73 30 69.5V57h8.5l1-1z"/><path fill="#FFF" stroke="#FFF" d="M0 0h528v390H0V0zm40 56l-1 1h-9v13l8 3 13 10q14 18 24 42l100 224 1 1h26l3-5 67-163 77 167 2 1h27L487 65v-3h-30l-74 189-53-115-16-30-10-13q-14-18-35-27l-23-7-11-1-1-1h-10l-1-1h-19l-1 1h-13v12q12 19 8l12 14 11 41-40 96-50-112q-11-25-27-44-15-19-39-28l-11-2-4-2h-8l-1-1-31-1z"/></svg>`,
  },
  {
    label: "primitive",
    value: isDev()
      ? "http://localhost:4004/primitive"
      : "https://image2svg-primitive.vercel.app/primitive",
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
