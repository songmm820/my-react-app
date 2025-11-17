import "./App.css";
import { Button } from "~/components/ui/button";
import { useTheme } from "~/provider/theme-provider";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <Button onClick={() => setTheme("light")}>Click me {theme}</Button>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
