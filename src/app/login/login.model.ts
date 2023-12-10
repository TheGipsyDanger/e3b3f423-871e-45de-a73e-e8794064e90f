import { ILogin } from "@/app/login/login.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginForm, loginSchema } from "@/utils";

export const useLogin = (props: ILogin.IModelProps): ILogin.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (params: ILoginForm<string>) => {
    // dispatch(loginActions.request(params));
  };

  return {
    control,
    trigger,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
  };
};
