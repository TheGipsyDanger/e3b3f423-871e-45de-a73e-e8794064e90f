"use client";
import { Input } from "@/components/Input";
import { Align } from "@/components/Align";
import { Button } from "@/components/Button";
import { ILogin } from "@/app/login/login.types";
import { useLogin } from "@/app/login/login.model";
import { Controller } from "react-hook-form";

export default function Login(props: ILogin.IView) {
  const { control, handleSubmit, errors, trigger, isValid, onSubmit } =
    useLogin({});

  return (
    <Align.Row className="flex flex-1 justify-center">
      <Align.Column className="w-1/2">
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input.OneLine
              id="email"
              label="E-mail"
              placeholder="E-mail"
              containerClassName="mb-4"
              {...{ onChange, onBlur, value, name, trigger, errors }}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Input.OneLine
              id="password"
              label="Password"
              type="password"
              placeholder="password"
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
