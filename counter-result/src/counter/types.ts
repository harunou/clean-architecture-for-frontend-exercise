export type UseCaseSuccess = void;
export type UseCaseFailure = Error;
export type UseCaseResult = UseCaseSuccess | UseCaseFailure;

export type UseCase<T = void> = {
  execute: (params: T) => Promise<UseCaseResult>;
};

export type Transaction<T = void> = {
  commit: (params: T) => void;
};

export type Effect<T = void, R = void> = {
  run: (params: T) => Promise<R>;
};

export type Selector<T = void, R = void> = {
  select: (state: T) => R;
};

export interface CounterStore {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface CounterGateway {
  getCount: () => Promise<number>;
  incrementCount: () => Promise<number>;
  decrementCount: () => Promise<number>;
  resetCount: () => Promise<number>;
}

export interface CounterPresenter {
  countValue: number;
  countStatus: "Zero" | "Positive" | "Negative";
}

export interface CounterController {
  onIncrementButtonClick: () => Promise<void>;
  onDecrementButtonClick: () => Promise<void>;
  onResetButtonClick: () => Promise<void>;
  onCounterMount: () => Promise<void>;
}
