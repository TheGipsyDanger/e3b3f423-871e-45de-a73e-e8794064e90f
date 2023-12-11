"use client";
import DatePicker from "react-datepicker";
import { useCreateBbqs } from "@/app/create-bbqs/create-bbqs.model";
import { ICreateBbqs } from "@/app/create-bbqs/create-bbqs.types";
import { Align } from "@/components/Align";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Controller } from "react-hook-form";
import { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt-BR";
registerLocale("pt-BR", pt);

export default function CreateBbqs(props: ICreateBbqs.IView) {
  const { control, handleSubmit, errors, trigger, isValid, onSubmit } =
    useCreateBbqs({});

  return (
    <Align.Row className="flex flex-1 justify-center">
      <Align.Column className="w-1/2">
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
                selected={value ? new Date(value) : new Date()}
                onChange={(date) => {
                  onChange(date as Date);
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
          name="description"
          defaultValue=""
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input.TextArea
              id="description"
              label="Descrição"
              placeholder="Comemoração do aniversário do Renan"
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
              label="Observações"
              placeholder="Vai ter open-bar"
              containerClassName="mb-8"
              {...{ onChange, onBlur, value, name, trigger, errors }}
            />
          )}
        />
        <Button
          label="Entrar"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          className="h-[44px] w-full"
        />
      </Align.Column>
    </Align.Row>
  );
}
