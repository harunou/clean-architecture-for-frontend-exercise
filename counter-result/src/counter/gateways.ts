import { CounterApi } from "./api";
import type { CounterGateway } from "./types";

let count = 5;

const sleep = (ms: number = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// NOTE: counter gateway unit (in-memory)
export const inMemoryCounterGateway: CounterGateway = {
  getCount: async () => {
    await sleep(500);
    return count;
  },
  incrementCount: async () => {
    count += 1;
    await sleep(500);
    return count;
  },
  decrementCount: async () => {
    count -= 1;
    await sleep(500);
    return count;
  },
  resetCount: async () => {
    count = 0;
    await sleep(500);
    return count;
  },
};

// NOTE: counter gateway unit (remote)
export const remoteCounterGateway: CounterGateway = {
  getCount: async () => {
    const response = await CounterApi.getCount();
    return response.value;
  },
  incrementCount: async () => {
    const response = await CounterApi.incrementCount();
    return response.value;
  },
  decrementCount: async () => {
    const response = await CounterApi.decrementCount();
    return response.value;
  },
  resetCount: async () => {
    const response = await CounterApi.resetCount();
    return response.value;
  },
};
