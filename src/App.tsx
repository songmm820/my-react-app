import { Button } from "~/components/ui/button";
import { useTheme } from "~/provider/theme-provider";
import { PRIMARY_COLORS } from "./lib/color";
import "./App.css";

function App() {
  const { themeColor, setThemeColor } = useTheme();

  return (
    <>
      <div className="w-full h-full p-8">
        <div className="flex flex-wrap gap-4">
          {PRIMARY_COLORS.map((color, index) => (
            <div
              key={index}
              className="w-9 h-9 rounded-full"
              style={{
                backgroundColor: color,
              }}
              onClick={() => setThemeColor(color)}
            />
          ))}
        </div>

        <Button className="mt-8">{themeColor}</Button>
      </div>
    </>
  );
}

export default App;
