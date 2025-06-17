import Counter from "./counter/Counter";
import CounterCli from "./counter/Cli";
import { CounterStoreProvider } from "./counter/providers";

function App() {
  return (
    <CounterStoreProvider>
      <Counter />
      <CounterCli />
    </CounterStoreProvider>
  );
}

export default App;
