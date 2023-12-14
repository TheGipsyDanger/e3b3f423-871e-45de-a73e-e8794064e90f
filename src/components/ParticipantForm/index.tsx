import { Controller } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { Align } from "@/components/Align";
import { Button } from "@/components/Button";

import { IParticipantForm } from "./ParticipantForm.types";
import { useParticipantForm } from "./ParticipantForm.model";
import Styles from "./ParticipantForm.styles";

export const ParticipantForm = (props: IParticipantForm.IView) => {
  const {
    control,
    handleSubmit,
    errors,
    trigger,
    isValid,
    onSubmit,
    isLoading,
    isEdit,
    suggestedValue,
    participant,
    closeModal,
  } = useParticipantForm(props);

  return (
    <>
      <Styles.Bg id={`ParticipantForm`} className="bg-black opacity-20" />
      <Styles.Bg>
        <Styles.Container>
          <Styles.Content>
            <Align.Column className="flex flex-1">
              <Styles.IconBtn onClick={closeModal}>
                <IoMdClose />
              </Styles.IconBtn>
              <Text variants="h3" className="font-bold self-center mb-8">
                {isEdit ? "Editar convidado" : "Adicionar convidado"}
              </Text>
              <Controller
                control={control}
                name="name"
                defaultValue={isEdit ? participant?.name : ""}
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <Input.OneLine
                    id="name"
                    label="Nome"
                    placeholder="Ex: Vanesso"
                    containerClassName="mb-4"
                    {...{ onChange, onBlur, value, name, trigger, errors }}
                  />
                )}
              />
              <Controller
                control={control}
                name="value"
                defaultValue={isEdit ? participant?.value : ""}
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <Input.OneLine
                    id="value"
                    label="Valor"
                    complementLabel={`Sugerido: ${suggestedValue}`}
                    placeholder={`Sugerido: R$ ${suggestedValue}`}
                    currency={true}
                    containerClassName="mb-4"
                    {...{ onChange, onBlur, value, name, trigger, errors }}
                  />
                )}
              />
              <Controller
                control={control}
                name="status"
                defaultValue={isEdit ? participant?.status : ""}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Text variants="h4" className="text-black font-bold mb-4">
                      Já pagou?
                    </Text>
                    <Align.Row className="mb-2">
                      <Styles.CheckboxInputContainer>
                        <Styles.Checkbox
                          type="checkbox"
                          onChange={() => onChange("paid")}
                          checked={value === "paid"}
                        />
                        <Text variants="body" className="ms-2">
                          Pago
                        </Text>
                      </Styles.CheckboxInputContainer>
                      <Styles.CheckboxInputContainer>
                        <Styles.Checkbox
                          type="checkbox"
                          onChange={() => onChange("open")}
                          checked={value === "open"}
                        />
                        <Text variants="body" className="ms-2">
                          Não pago
                        </Text>
                      </Styles.CheckboxInputContainer>
                    </Align.Row>
                  </>
                )}
              />
              <Button
                isLoading={isLoading}
                label="Adicionar"
                disabled={!isValid}
                onClick={handleSubmit(onSubmit)}
                className="h-[44px] w-full"
              />
            </Align.Column>
          </Styles.Content>
        </Styles.Container>
      </Styles.Bg>
    </>
  );
};
