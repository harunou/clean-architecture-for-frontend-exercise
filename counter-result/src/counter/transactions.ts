import { useCounterStore } from "./hooks/useCounterStore";
import type { Transaction } from "./types";

export const useSetCountTransaction = (): Transaction<{ count: number }> => {
  const { setCount } = useCounterStore();

  const commit = (params: { count: number }): void => {
    setCount(params.count);
  };

  return { commit };
};
