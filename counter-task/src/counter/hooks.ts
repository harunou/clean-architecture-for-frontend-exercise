import { inMemoryCounterGateway } from "./gateways";
import type { CounterGateway } from "./types";

export const useCounterGateway = (): CounterGateway => {
  return inMemoryCounterGateway;
};
