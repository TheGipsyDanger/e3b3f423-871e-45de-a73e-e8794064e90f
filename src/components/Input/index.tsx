import * as React from "react";
import { Text } from "@/components/Text";
import { IInput } from "@/components/Input/Input.types";

export const Input = ({
  id,
  label = "",
  placeholder,
  type = "text",
  required = false,
  errors,
  name,
  value,
  onChange,
  trigger,
}: IInput.IView) => (
  <div id={`Input-${id}`}>
    <div className="mb-2">
      <Text variants="h4" className="text-black font-bold">
        {label}
      </Text>
    </div>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(event: any) => {
        onChange(event.target.value);
        trigger(name);
      }}
      className="mr-4 bg-gray-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required={required}
    />
    {errors?.[name]?.message && (
      <Text variants="h4" className="text-red-500">
        * {errors?.[name]?.message}
      </Text>
    )}
  </div>
);
