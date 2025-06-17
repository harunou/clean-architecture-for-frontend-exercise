import type { UseCase, UseCaseResult } from "./types";
import { useCounterGateway } from "./hooks/useCounterGateway";
import { useCounterStore } from "./hooks/useCounterStore";
import { useGetCountEffect } from "./effects";
import { useSetCountTransaction } from "./transactions";

export const useDecrementCountUseCase = (): UseCase => {
  const { setCount } = useCounterStore();
  const gateway = useCounterGateway();

  const execute = async (): Promise<UseCaseResult> => {
    const newCount = await gateway.decrementCount();

    setCount(newCount);
  };

  return { execute };
};

export const useGetCountUseCase = (): UseCase => {
  // NOTE: effect unit
  const { run: runGetCount } = useGetCountEffect();

  // NOTE: transaction unit
  const { commit: commitSetCount } = useSetCountTransaction();

  const execute = async (): Promise<UseCaseResult> => {
    const count = await runGetCount();

    commitSetCount({ count });
  };

  return { execute };
};

export const useIncrementCountUseCase = (): UseCase => {
  const { setCount } = useCounterStore();
  const gateway = useCounterGateway();

  const execute = async (): Promise<UseCaseResult> => {
    setCount((prevCount) => prevCount + 1);

    const newCount = await gateway.incrementCount();

    setCount(newCount);
  };

  return { execute };
};

export const useResetCountUseCase = (): UseCase => {
  const { setCount } = useCounterStore();
  const gateway = useCounterGateway();

  const execute = async (): Promise<UseCaseResult> => {
    const newCount = await gateway.resetCount();

    setCount(newCount);
  };

  return { execute };
};
