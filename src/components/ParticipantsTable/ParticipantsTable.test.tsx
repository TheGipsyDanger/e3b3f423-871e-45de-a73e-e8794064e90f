import "@testing-library/jest-dom";
import { ParticipantsTable } from "./";
import { events } from "@/mocks";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { useCurrency } from "@/utils";

const MockFN = jest.fn();
const editFN = jest.fn();
const delFN = jest.fn();

jest.mock("next/navigation", () => {
  return {
    useRouter: jest.fn(() => ({
      push: MockFN,
    })),
  };
});

const mockStore = configureStore();

const initialState = {
  Events: {
    events,
  },
};

const { applyMask } = useCurrency();

const Component = ({ store }: any) => (
  <Provider store={store}>
    <ParticipantsTable
      participants={events[0].participants}
      editParticipant={editFN}
      deleteParticipant={delFN}
    />
  </Provider>
);

describe("Render ParticipantsTable", () => {
  it("Should be ParticipantsTable exist", () => {
    render(<Component store={mockStore(initialState)} />);
    expect(screen.getByTestId(`ParticipantsTable`)).toBeInTheDocument();

    expect(
      screen.getAllByTestId(`ParticipantsTableName`)[0]
    ).toBeInTheDocument();
    expect(screen.getAllByTestId(`ParticipantsTableName`)[0].textContent).toBe(
      "Vanesso pudnick"
    );
    expect(
      screen.getAllByTestId(`ParticipantsTableStatus`)[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByTestId(`ParticipantsTableStatus`)[0].textContent
    ).toBe("pago");
    expect(
      screen.getAllByTestId(`ParticipantsTableValue`)[0]
    ).toBeInTheDocument();
    expect(screen.getAllByTestId(`ParticipantsTableValue`)[0].textContent).toBe(
      applyMask(events[0].participants[0].value)
    );
    expect(
      screen.getByTestId(`ParticipantsTableCollection`)
    ).toBeInTheDocument();
  });
  it("It should be clickable correct", () => {
    render(<Component store={mockStore(initialState)} />);

    const edit = screen.getAllByTestId(`ParticipantsTableEdit`)[0];
    edit.click();
    expect(edit).toBeInTheDocument();
    expect(editFN).toHaveBeenCalledWith(0);

    const del = screen.getAllByTestId(`ParticipantsTableDelete`)[0];
    del.click();
    expect(del).toBeInTheDocument();
    expect(delFN).toHaveBeenCalledWith("0317a238-56cc-42a6-b10d-a0a476198b1d");
  });
});
