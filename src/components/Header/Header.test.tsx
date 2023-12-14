import "@testing-library/jest-dom";
import { Header } from "./";
import { events } from "@/mocks";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { useDate } from "@/utils";

const MockFN = jest.fn();

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

const { sortDate } = useDate();

const Component = ({ store }: any) => (
  <Provider store={store}>
    <Header />
  </Provider>
);

describe("Render Header", () => {
  it("Should be Header exist", () => {
    render(<Component store={mockStore(initialState)} />);
    expect(screen.getByTestId(`Header`)).toBeInTheDocument();
    expect(screen.getByTestId(`HeaderLogo`)).toBeInTheDocument();
    expect(screen.getByTestId(`HeaderLogoAction`)).toBeInTheDocument();
    expect(screen.getByTestId(`HeaderNextEvent`)).toBeInTheDocument();
    expect(screen.getByTestId(`HeaderNextEventTitle`)).toBeInTheDocument();
    expect(screen.getByTestId(`HeaderNextEventTitle`).textContent).toBe(
      sortDate(events)[0].title
    );
    expect(screen.getByTestId(`HeaderAction`)).toBeInTheDocument();
  });
  it("It should be clickable correct", () => {
    render(<Component store={mockStore(initialState)} />);

    const logo = screen.getByTestId(`HeaderLogoAction`);
    logo.click();
    expect(logo).toBeInTheDocument();
    expect(MockFN).toHaveBeenCalledWith("/my-bbqs");

    const action = screen.getByTestId(`HeaderAction`);
    action.click();
    expect(action).toBeInTheDocument();
    expect(MockFN).toHaveBeenCalledWith("/create-bbqs");
  });
});
