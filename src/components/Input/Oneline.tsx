import { ITriggerFormInput, useCurrency } from "@/utils";
import { Align } from "@/components/Align";
import { Text } from "@/components/Text";

import { IInput } from "./Input.types";

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
  complementLabel,
  containerClassName,
}: IInput.IView) => {
  const { applyMask, removeMask } = useCurrency();
  return (
    <div id={`Input-${id}`} className={containerClassName}>
      <Align.Row className="justify-between items-center  mb-2">
        <Text variants="h4" className="text-black font-bold">
          {label}
        </Text>
        <Text variants="body" className="text-gray-400">
          {complementLabel}
        </Text>
      </Align.Row>
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
