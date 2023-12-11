import { currency } from "remask";

export const useCurrency = () => {
  const applyMask = (value: string) => {
    return currency.mask({
      locale: "pt-BR",
      currency: "BRL",
      value: Number(value.toString()),
    });
  };

  const removeMask = (value: string) => {
    return currency.unmask({
      locale: "pt-BR",
      currency: "BRL",
      value,
    });
  };

  return {
    applyMask,
    removeMask,
  };
};
