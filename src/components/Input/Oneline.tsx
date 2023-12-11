import * as React from "react";
import { Text } from "@/components/Text";
import { IInput } from "@/components/Input/Input.types";
import { ITriggerFormInput, useCurrency } from "@/utils";
import { currency as currencyRemask } from "remask";

export const OneLine = ({
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
  className,
  currency = false,
  containerClassName,
}: IInput.IView) => {
  const { applyMask, removeMask } = useCurrency();
  // if (currency) {
  //   // if (value == "") return value;
  //   console.log({ value });
  //   if (value !== "") {
  //     value = transformInBr(value);
  //   }
  // }

  console.log({ value });

  return (
    <div id={`Input-${id}`} className={containerClassName}>
      <div className="mb-2">
        <Text variants="h4" className="text-black font-bold">
          {label}
        </Text>
      </div>
      <input
        id={id}
        type={type}
        value={currency ? applyMask(value) : value}
        onChange={(event: any) => {
          onChange(
            currency ? removeMask(event.target.value) : event.target.value
          );
          trigger(name as keyof ITriggerFormInput);
        }}
        className={`mr-4 bg-gray-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
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
};
