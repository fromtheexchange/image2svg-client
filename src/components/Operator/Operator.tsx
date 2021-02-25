import React from "react";
import tw, { css } from "twin.macro";

interface OperatorProps {
  isLoading?: boolean;
  className?: string;
}
export function Operator({ isLoading, className }: OperatorProps) {
  const iconSrc = isLoading
    ? "/static/icons/icons8/iOS/warm-gray/icons8-reboot.svg" :"/static/icons/icons8/iOS/warm-gray/icons8-right.svg";

  const iconAlt = isLoading ? "Loading spinner" :"Right arrow icon";
  return (
    <div
      className={className}
      css={isLoading && tw`cursor-wait`}
      tw="absolute grid w-24 h-24 rounded-full bg-amber-400 place-items-center"
    >
      <div tw="transform rotate-90 lg:rotate-0">
        <img
          width="48"
          height="48"
          css={isLoading && tw`animate-spin`}
          tw="w-12 h-12"
          src={iconSrc}
          alt={iconAlt}
        />
      </div>
    </div>
  );
}
