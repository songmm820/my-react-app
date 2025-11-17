import "./App.css";
import { Button } from "~/components/ui/button";
import { useTheme } from "~/provider/theme-provider";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="w-full h-full p-8">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <Button onClick={() => setTheme("light")}>Click me {theme}</Button>
          <Button variant="outline" onClick={async () => {}}></Button>
        </div>
      </div>
    </>
  );
}

export default App;
