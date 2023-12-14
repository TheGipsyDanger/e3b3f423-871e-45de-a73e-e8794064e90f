import { useCurrency } from "./";

describe("useCurrency", () => {
  it("should apply mask correctly", () => {
    const { applyMask } = useCurrency();
    expect(applyMask("1").replace(/\s/g, "")).toEqual("R$1,00");
  });
  it("should remove mask correctly", () => {
    const { removeMask } = useCurrency();
    expect(removeMask("R$ 1.234,56")).toBe(1234.56);
  });
});
