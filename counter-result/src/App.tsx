import Counter from "./counter/Counter";
import { CounterStoreProvider } from "./counter/providers";

function App() {
  return (
    <CounterStoreProvider>
      <Counter />
    </CounterStoreProvider>
  );
}

export default App;
