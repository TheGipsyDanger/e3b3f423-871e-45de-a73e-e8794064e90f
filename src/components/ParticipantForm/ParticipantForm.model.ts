import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import * as eventsActions from "@/redux/actions/EventsActions";
import {
  IParticipantForm as IParticipantFormType,
  participantSchema,
  useAppDispatch,
  useCurrency,
} from "@/utils";

import { IParticipantForm } from "./ParticipantForm.types";

export const useParticipantForm = (
  props: IParticipantForm.IModelProps
): IParticipantForm.IModel => {
  const {
    closeModal,
    participant,
    event: { id: eventId, suggestedValue },
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(participantSchema),
  });

  const dispatch = useAppDispatch();
  const isEdit = !!participant?.id;

  const { applyMask } = useCurrency();

  const onSubmit = (params: IParticipantFormType<string>) => {
    setIsLoading(true);
    if (isEdit) {
      dispatch(
        eventsActions.editParticipant({
          eventId: String(eventId),
          participant: { ...params, id: String(participant?.id) },
        })
      );
    } else {
      dispatch(
        eventsActions.addParticipant({
          eventId: String(eventId),
          participant: { ...params, id: uuidv4() },
        })
      );
    }
    setTimeout(() => {
      closeModal();
      setIsLoading(false);
    }, 2000);
  };

  return {
    ...props,
    control,
    trigger,
    handleSubmit,
    errors,
    isValid,
    isLoading,
    onSubmit,
    isEdit,
    suggestedValue: applyMask(suggestedValue),
  };
};
