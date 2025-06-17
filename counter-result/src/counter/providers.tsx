import { useState } from "react";
import { CounterStoreContext } from "./contexts";

const INITIAL_COUNT = 0;

export const CounterStoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [count, setCount] = useState(INITIAL_COUNT);

  return (
    <CounterStoreContext.Provider value={{ count, setCount }}>
      {children}
    </CounterStoreContext.Provider>
  );
};
