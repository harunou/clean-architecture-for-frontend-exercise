import type { CounterPresenter } from "../types";
import { useCounterStore } from "./useCounterStore";
import { useCountStatusSelector } from "../selectors";

export const useCounterPresenter = (): CounterPresenter => {
  // NOTE: entity store unit
  const { count } = useCounterStore();

  // NOTE: selector unit
  const { select: selectCountStatus } = useCountStatusSelector();

  // NOTE: presenter unit
  return {
    countValue: count,
    countStatus: selectCountStatus(),
  };
};
