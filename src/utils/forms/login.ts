import { ISchema, ILoginForm } from "@/utils/interfaces";
import * as yup from "yup";

const exec = (): ISchema<ILoginForm<string>, ILoginForm<any>> => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .lowercase()
      .required("Campo obrigatório")
      .email("Formato inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Senha muito curta."),
  });
};

export const loginSchema = exec();
