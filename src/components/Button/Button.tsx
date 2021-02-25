import React from "react";
import "twin.macro";

// TypeScript custom tag syntax for autocompletion
// https://stackoverflow.com/a/54049872
// https://stackoverflow.com/a/65865806
// https://www.aleksandrhovhannisyan.com/blog/dynamic-tag-name-props-in-react/

type AnyTag =
  | string
  | React.FunctionComponent<never>
  | (new (props: never) => React.Component);

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes<Tag>
  : never;

interface ButtonProps {
  children: React.ReactNode;
  iconSrc: string;
  iconAlt: string;
  className?: string;
  as?: React.ComponentType | keyof JSX.IntrinsicElements;
}

// Button type
export function Button<Tag extends AnyTag = "button">(
  props: { as?: Tag } & PropsOf<Tag> & ButtonProps
): JSX.Element;

// Button implementation
export function Button({
  children,
  iconSrc,
  iconAlt,
  as: Tag = "button",
  ...props
}: ButtonProps) {
  return (
    <Tag
      tw="flex flex-row w-full px-6 py-3 space-x-2 cursor-pointer place-content-center place-items-center"
      {...props}
    >
      <span>{children}</span>
      <img tw="w-8 h-8" width="32" height="32" src={iconSrc} alt={iconAlt} />
    </Tag>
  );
}
