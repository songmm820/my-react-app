import { Button } from "~/components/ui/button";
import { useNavigateSafe } from "~/hooks/use-navigate";
import { PRIMARY_COLORS } from "~/lib/color";
import { useTheme } from "~/provider/theme-provider";

const Home = () => {
  const { themeColor, setThemeColor } = useTheme();

  const navigate = useNavigateSafe();

  return (
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

      <Button className="m-4">{themeColor}</Button>
      <Button className="m-4" onClick={() => navigate("/user/22")}>
        前往下一个页面
      </Button>
    </div>
  );
};

export default Home;
