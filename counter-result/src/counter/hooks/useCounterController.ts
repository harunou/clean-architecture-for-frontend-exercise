import type { CounterController } from "../types";
import {
  useIncrementCountUseCase,
  useDecrementCountUseCase,
  useResetCountUseCase,
  useGetCountUseCase,
} from "../useCases";

export const useCounterController = (): CounterController => {
  // NOTE: use case interactor units
  const { execute: executeIncrementCount } = useIncrementCountUseCase();
  const { execute: executeDecrementCount } = useDecrementCountUseCase();
  const { execute: executeResetCount } = useResetCountUseCase();
  const { execute: executeGetCount } = useGetCountUseCase();

  // NOTE: controller unit
  return {
    onIncrementButtonClick: async () => {
      await executeIncrementCount();
    },
    onDecrementButtonClick: async () => {
      await executeDecrementCount();
    },
    onResetButtonClick: async () => {
      await executeResetCount();
    },
    onCounterMount: async () => {
      await executeGetCount();
    },
  };
};
