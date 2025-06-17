import { inMemoryCounterGateway, remoteCounterGateway } from "../gateways";
import type { CounterGateway } from "../types";

export const useCounterGateway = (): CounterGateway => {
  if (import.meta.env.DEV) {
    return inMemoryCounterGateway;
  }
  return remoteCounterGateway;
};
