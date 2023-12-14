import "@testing-library/jest-dom";
import { EventItem } from "./";
import { events } from "@/mocks";
import { render, screen } from "@testing-library/react";
import { useCurrency, useDate, useSum } from "@/utils";

const MockFN = jest.fn();

jest.mock("next/navigation", () => {
  return {
    useRouter: jest.fn(() => ({
      push: MockFN,
    })),
  };
});

const event = events[0];

const { applyDateMask } = useDate();
const { sum } = useSum();
const { applyMask } = useCurrency();

const collection = applyMask(String(sum(event.participants)));
const suggested = applyMask(event.suggestedValue);

const Component = () => <EventItem count={0} {...events[0]} />;

describe("Render EventItem", () => {
  it("Should be EventItem exist", () => {
    render(<Component />);
    expect(screen.getByTestId(`EventItem`)).toBeInTheDocument();
  });

  it("Should be EventItem exist a correct props", () => {
    render(<Component />);
    expect(screen.getByTestId(`EventItemTitle`)).toBeInTheDocument();
    expect(screen.getByTestId(`EventItemTitle`)).toHaveTextContent(event.title);
    expect(screen.getByTestId(`EventItemDate`)).toBeInTheDocument();
    expect(screen.getByTestId(`EventItemDate`)).toHaveTextContent(
      `Data: ${applyDateMask(event.date)}`
    );
    expect(screen.getByTestId(`EventItemParticipants`)).toBeInTheDocument();
    expect(screen.getByTestId(`EventItemParticipants`)).toHaveTextContent(
      String(event.participants.length)
    );
    expect(screen.getByTestId(`EventItemSuggested`)).toBeInTheDocument();
    expect(screen.getByTestId(`EventItemSuggested`).textContent).toBe(
      suggested
    );
    expect(screen.getByTestId(`EventItemCollection`)).toBeInTheDocument();
    expect(screen.getByTestId(`EventItemCollection`).textContent).toBe(
      collection
    );
  });
});
