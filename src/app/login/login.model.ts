import { ILogin } from "@/app/login/login.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginForm, loginSchema } from "@/utils";
import { useRouter } from "next/navigation";

export const useLogin = (): ILogin.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = (params: ILoginForm<string>) => {
    router.push("/my-bbqs");
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
