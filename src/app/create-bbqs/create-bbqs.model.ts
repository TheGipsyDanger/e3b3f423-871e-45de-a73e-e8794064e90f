import { useState } from "react";
import { ICreateBbqs } from "@/app/create-bbqs/create-bbqs.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ICreateBbqsForm,
  createBbqSchema,
  useAppDispatch,
  useAppSelector,
} from "@/utils";
import { v4 as uuidv4 } from "uuid";
import * as eventsActions from "@/redux/actions/EventsActions";

export const useCreateBbqs = (
  props: ICreateBbqs.IModelProps
): ICreateBbqs.IModel => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.Events.events);
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
      dispatch(eventsActions.setEvent({ id: uuidv4(), ...params }));
      setIsLoading(false);
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
