import { useCallback, useEffect } from "react";
import { useCounterStore } from "./hooks/useCounterStore";
import {
  useDecrementCountUseCase,
  useIncrementCountUseCase,
  useResetCountUseCase,
} from "./useCases";

// NOTE: Extend the window type to include 'cli'
declare global {
  interface Window {
    cli?: {
      increment: () => void;
      decrement: () => void;
      reset: () => void;
      getValue: () => number;
    };
  }
}

function Cli() {
  const { count } = useCounterStore();

  const { execute: executeDecrementCountUseCase } = useDecrementCountUseCase();
  const { execute: executeIncrementCountUseCase } = useIncrementCountUseCase();
  const { execute: executeResetCountUseCase } = useResetCountUseCase();

  const onIncrementCommand = useCallback(() => {
    void executeIncrementCountUseCase();
  }, [executeIncrementCountUseCase]);

  const onDecrementCommand = useCallback(() => {
    void executeDecrementCountUseCase();
  }, [executeDecrementCountUseCase]);

  const onResetCommand = useCallback(() => {
    void executeResetCountUseCase();
  }, [executeResetCountUseCase]);

  const onGetValueCommand = useCallback(() => {
    return count;
  }, [count]);

  useEffect(() => {
    window.cli = {
      increment: onIncrementCommand,
      decrement: onDecrementCommand,
      reset: onResetCommand,
      getValue: onGetValueCommand,
    };
    return () => {
      delete window.cli;
    };
  }, [
    onDecrementCommand,
    onGetValueCommand,
    onIncrementCommand,
    onResetCommand,
  ]);

  return null;
}

export default Cli;
