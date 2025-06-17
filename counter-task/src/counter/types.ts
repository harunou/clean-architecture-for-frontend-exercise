export interface CounterGateway {
  getCount: () => Promise<number>;
  incrementCount: () => Promise<number>;
  decrementCount: () => Promise<number>;
  resetCount: () => Promise<number>;
}
