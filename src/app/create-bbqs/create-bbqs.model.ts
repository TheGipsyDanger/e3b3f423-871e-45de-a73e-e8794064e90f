import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

import { ICreateBbqsForm, createBbqSchema, useAppDispatch } from "@/utils";
import * as eventsActions from "@/redux/actions/EventsActions";

import { ICreateBbqs } from "./create-bbqs.types";

export const useCreateBbqs = (): ICreateBbqs.IModel => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
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
    setIsLoading(true);
    setTimeout(() => {
      dispatch(
        eventsActions.setEvent({ id: uuidv4(), participants: [], ...params })
      );
      setIsLoading(false);
      router.push("/my-bbqs");
    }, 2000);
  };

  return {
    control,
    trigger,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    date,
    isLoading,
    handleDate,
  };
};
