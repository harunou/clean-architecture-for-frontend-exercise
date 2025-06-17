import { useCounterStore } from "./hooks/useCounterStore";
import type { Selector } from "./types";

type CountStatus = "Zero" | "Positive" | "Negative";

export const useCountStatusSelector = (): Selector<void, CountStatus> => {
  const { count } = useCounterStore();

  const select = (): CountStatus => {
    return count === 0 ? "Zero" : count > 0 ? "Positive" : "Negative";
  };

  return { select };
};
