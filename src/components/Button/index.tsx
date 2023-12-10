import * as React from "react";
import { IButton } from "@/components/Button/Button.types";

export const Button = ({
  label,
  className,
  disabled,
  ...rest
}: IButton.IView) => {
  const style = disabled
    ? `bg-gray-500 hover:bg-gray-700 focus:ring-gray-400`
    : `bg-blue-500 hover:bg-blue-700 focus:ring-blue-400`;

  return (
    <button
      {...rest}
      id={`Button`}
      disabled={disabled}
      className={`text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${style} ${className}`}
    >
      {label}
    </button>
  );
};
