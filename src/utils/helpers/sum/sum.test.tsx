import { useSum } from "./";
import { events } from "@/mocks";

describe("useSum", () => {
  it("should calculate the sum correctly", () => {
    const { sum } = useSum();

    const participants = events[0].participants;

    const result = sum(participants);

    expect(result).toEqual(62);
  });

  it("should handle an empty array", () => {
    const { sum } = useSum();
    const result = sum([]);
    expect(result).toEqual(0);
  });
});
