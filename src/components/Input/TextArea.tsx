import { ITriggerFormInput } from "@/utils";
import { Text } from "@/components/Text";

import { IInput } from "./Input.types";

export const TextArea = ({
  id,
  label = "",
  placeholder,
  required = false,
  errors,
  name,
  value,
  onChange,
  trigger,
  className,
  containerClassName,
}: IInput.IView) => (
  <div id={`Input-${id}`} className={containerClassName}>
    <div className="mb-2">
      <Text variants="h4" className="text-black font-bold">
        {label}
      </Text>
    </div>
    <textarea
      id={id}
      value={value}
      onChange={(event: any) => {
        onChange(event.target.value);
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
