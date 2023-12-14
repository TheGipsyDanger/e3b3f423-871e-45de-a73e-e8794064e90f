import { useDate } from "./";
import { events } from "@/mocks";

describe("useDate", () => {
  it("should sort dates correctly", () => {
    const { sortDate } = useDate();

    const sortedEvents = sortDate(events);

    expect(sortedEvents).toEqual([
      {
        id: "0317a238-56cc-42a6-b10d-a0a476198b1c",
        date: "Fri Dec 15 2023 00:00:00 GMT-0300 (Brasilia Standard Time)",
        description: "Descriçao enterro dos ossos do renan",
        obs: "Obs enterro dos ossos do renan",
        suggestedValue: "30.00",
        title: "Enterro dos ossos",
        participants: [
          {
            id: "0317a238-56cc-42a6-b10d-a0a476198b1d",
            name: "Vanesso pudnick",
            value: "30.0",
            status: "paid",
          },
          {
            id: "0317a238-56cc-42a6-b10d-a0a476198b1r",
            name: "Izabelo Johnson",
            value: "32.0",
            status: "open",
          },
        ],
      },
    ]);
  });

  it("should apply date mask correctly", () => {
    const { applyDateMask } = useDate();
    const formattedDate = applyDateMask(
      "Fri Dec 15 2023 00:00:00 GMT-0300 (Brasilia Standard Time)"
    );
    expect(formattedDate).toEqual("15/12/2023");
  });
});
