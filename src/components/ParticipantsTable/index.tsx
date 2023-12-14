import { useCurrency } from "@/utils";
import { Text } from "@/components/Text";
import { SameError } from "@/components/SameError";

import { IParticipantsTable } from "./ParticipantsTable.types";
import { useParticipantsTable } from "./ParticipantsTable.model";
import Styles from "./ParticipantsTable.styles";

export const ParticipantsTable = (props: IParticipantsTable.IView) => {
  const { applyMask } = useCurrency();
  const { collection, participants, editParticipant, deleteParticipant } =
    useParticipantsTable(props);

  if (!participants.length) {
    return <SameError message="Nenhum participante cadastrado" />;
  }

  return (
    <Styles.Table data-testid={`ParticipantsTable`}>
      <Styles.TableHeader>
        <tr>
          <Styles.Th>Nome</Styles.Th>
          <Styles.Th>Status</Styles.Th>
          <Styles.Th>Valor</Styles.Th>
        </tr>
      </Styles.TableHeader>
      <tbody>
        {participants.map((participant, index) => (
          <Styles.TableRow key={participant.id}>
            <Styles.TableItem data-testid={`ParticipantsTableName`}>
              {participant.name}
            </Styles.TableItem>
            <Styles.TableItem data-testid={`ParticipantsTableStatus`}>
              <Styles.StatusContainer>
                <Styles.Status paid={participant.status} />
                {participant.status === "paid" ? "pago" : "aberto"}
              </Styles.StatusContainer>
            </Styles.TableItem>
            <Styles.TableItem data-testid={`ParticipantsTableValue`}>
              {applyMask(participant.value)}
            </Styles.TableItem>
            <Styles.TableItem>
              <Styles.EditLink
                data-testid={`ParticipantsTableEdit`}
                type="edit"
                onClick={() => editParticipant(index)}
              >
                Editar
              </Styles.EditLink>
            </Styles.TableItem>
            <Styles.TableItem>
              <Styles.EditLink
                data-testid={`ParticipantsTableDelete`}
                type="delete"
                onClick={() => deleteParticipant(participant.id)}
              >
                Excluir
              </Styles.EditLink>
            </Styles.TableItem>
          </Styles.TableRow>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <Styles.Th>Total</Styles.Th>
          <Styles.Th></Styles.Th>
          <Styles.Th data-testid={`ParticipantsTableCollection`}>
            {collection}
          </Styles.Th>
          <td></td>
        </tr>
      </tfoot>
    </Styles.Table>
  );
};
