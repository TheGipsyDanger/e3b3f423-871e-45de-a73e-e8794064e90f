"use client";
import { Controller } from "react-hook-form";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt-BR";

import { Align } from "@/components/Align";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";

import { useCreateBbqs } from "./create-bbqs.model";
import Styles from "./create-bbqs.styles";

registerLocale("pt-BR", pt);

export default function CreateBbqs() {
  const {
    control,
    handleSubmit,
    errors,
    trigger,
    isValid,
    onSubmit,
    isLoading,
  } = useCreateBbqs();

  return (
    <Styles.Container id="CreateBbqs">
      <Styles.Content>
        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, value } }) => (
            <Align.Column className="w-full mb-4">
              <div className="mb-2">
                <Text variants="h4" className="text-black font-bold">
                  {`Data do evento`}
                </Text>
              </div>
              <DatePicker
                locale={"pt-BR"}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText={`22/05/${new Date().getFullYear()}`}
                // @ts-ignore
                selected={value ? new Date(value) : ("" as Date)}
                onChange={(date) => {
                  onChange(date as Date);
                  trigger("date");
                }}
                className={`mr-4 bg-gray-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
            </Align.Column>
          )}
        />
        <Controller
          control={control}
          name="title"
          defaultValue=""
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input.OneLine
              id="title"
              label="Nome do churrasco"
              placeholder="Niver do renan"
              containerClassName="mb-4"
              {...{ onChange, onBlur, value, name, trigger, errors }}
            />
          )}
        />
        <Controller
          control={control}
          name="suggestedValue"
          defaultValue=""
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input.OneLine
              id="suggestedValue"
              label="valor sugerido"
              placeholder="20,00"
              containerClassName="mb-4"
              currency={true}
              {...{ onChange, onBlur, value, name, trigger, errors }}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          defaultValue=""
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input.TextArea
              id="description"
              label="Descrição *"
              placeholder="Comemoração do aniversário do Renan"
              className="resize-none"
              containerClassName="mb-4"
              {...{ onChange, onBlur, value, name, trigger, errors }}
            />
          )}
        />
        <Controller
          control={control}
          name="obs"
          defaultValue=""
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input.TextArea
              id="obs"
              label="Observações *"
              placeholder="Vai ter open-bar"
              className="resize-none"
              containerClassName="mb-8"
              {...{ onChange, onBlur, value, name, trigger, errors }}
            />
          )}
        />
        <Button
          label="Entrar"
          isLoading={isLoading}
          disabled={!isValid}
          onClick={isLoading ? () => {} : handleSubmit(onSubmit)}
          className="h-[44px] w-full"
        />
      </Styles.Content>
    </Styles.Container>
  );
}
