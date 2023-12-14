import { ISchema, IParticipantForm } from "@/utils/interfaces";
import * as yup from "yup";

const exec = (): ISchema<IParticipantForm<string>, IParticipantForm<any>> => {
  return yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
    value: yup
      .string()
      .required("Campo obrigatório")
      .test("value-min", "Valor tem que ser maior que 0", function (value) {
        return !(value === "0" || value === "");
      }),
  });
};

export const participantSchema = exec();
