import { useCounterGateway } from "./hooks/useCounterGateway";
import type { Effect } from "./types";

export const useGetCountEffect = (): Effect<void, number> => {
  const gateway = useCounterGateway();

  const run = async (): Promise<number> => {
    return await gateway.getCount();
  };

  return { run };
};
