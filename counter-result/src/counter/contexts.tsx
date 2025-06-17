import { createContext } from "react";
import type { CounterStore } from "./types";

export const CounterStoreContext = createContext<CounterStore | undefined>(
  undefined,
);
