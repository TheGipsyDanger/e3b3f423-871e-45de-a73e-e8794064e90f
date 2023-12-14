import "@testing-library/jest-dom";
import { ParticipantForm } from "./";
import { events } from "@/mocks";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";

const mockStore = configureStore();

const closeMK = jest.fn();

const event = events[0];

const initialState = {
  Events: {
    events,
  },
};

const Component = ({ store, participant }: any) => (
  <Provider store={store}>
    <ParticipantForm
      participant={participant}
      event={event}
      closeModal={closeMK}
    />
  </Provider>
);

describe("Render ParticipantForm", () => {
  it("Should be ParticipantForm exist in edit Mode", () => {
    render(
      <Component
        store={mockStore(initialState)}
        participant={event.participants[0]}
      />
    );
    expect(screen.getByTestId(`ParticipantForm`)).toBeInTheDocument();
    expect(
      screen.getByTestId(`ParticipantFormCloseAction`)
    ).toBeInTheDocument();
    expect(screen.getByTestId(`ParticipantFormTitle`)).toBeInTheDocument();
    expect(screen.getByTestId(`ParticipantFormTitle`).textContent).toBe(
      "Editar convidado"
    );
  });
  it("Should be ParticipantForm exist in add Mode", () => {
    render(<Component store={mockStore(initialState)} />);
    expect(screen.getByTestId(`ParticipantForm`)).toBeInTheDocument();
    expect(
      screen.getByTestId(`ParticipantFormCloseAction`)
    ).toBeInTheDocument();
    expect(screen.getByTestId(`ParticipantFormTitle`)).toBeInTheDocument();
    expect(screen.getByTestId(`ParticipantFormTitle`).textContent).toBe(
      "Adicionar convidado"
    );
  });
  it("It should be clickable correct", () => {
    render(<Component store={mockStore(initialState)} />);
    const action = screen.getByTestId(`ParticipantFormCloseAction`);
    action.click();
    expect(closeMK).toHaveBeenCalled();
  });
});
