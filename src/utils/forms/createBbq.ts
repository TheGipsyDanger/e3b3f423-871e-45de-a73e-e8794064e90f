import { ISchema, ICreateBbqsForm } from "@/utils/interfaces";
import * as yup from "yup";

const exec = (): ISchema<ICreateBbqsForm<string>, ICreateBbqsForm<any>> => {
  return yup.object().shape({
    title: yup.string().trim().required("Campo obrigatório"),
    date: yup.string().trim().required("Campo obrigatório"),
    description: yup.string().trim(),
    obs: yup.string().trim(),
  });
};

export const createBbqSchema = exec();
