import { useContext } from "react";
import { CounterStoreContext } from "../contexts";

export const useCounterStore = () => {
  const context = useContext(CounterStoreContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};
