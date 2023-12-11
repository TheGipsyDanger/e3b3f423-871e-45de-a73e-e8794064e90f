import { useState } from "react";
import { ICreateBbqs } from "@/app/create-bbqs/create-bbqs.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ICreateBbqsForm, createBbqSchema } from "@/utils";

export const useCreateBbqs = (
  props: ICreateBbqs.IModelProps
): ICreateBbqs.IModel => {
  const [date, setDate] = useState(new Date());
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(createBbqSchema),
  });

  const handleDate = (date: Date) => setDate(date);

  const onSubmit = (params: ICreateBbqsForm<string>) => {
    // dispatch(loginActions.request(params));
  };

  return {
    control,
    trigger,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    date,
    handleDate,
  };
};
