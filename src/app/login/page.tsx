"use client";
import { Controller } from "react-hook-form";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { useLogin } from "./login.model";
import Styles from "./login.styles";

export default function Login() {
  const { control, handleSubmit, errors, trigger, isValid, onSubmit } =
    useLogin();

  return (
    <Styles.Container id="Login">
      <Styles.Content>
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
          isLoading={false}
          label="Entrar"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          className="h-[44px] w-full"
        />
      </Styles.Content>
    </Styles.Container>
  );
}
