export const currencyToSign = (currency: string): string => {
  const symbols: Record<string, string> = {
    PHP: "₱", // Philippine Peso
    USD: "$", // US Dollar
  };

  return symbols[currency] || currency;
};
