
import { useTheme } from "next-themes";
import { FiSun , FiMoon } from "react-icons/fi";

const renderThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <FiSun
        className="w-7 h-7 "
        role="button"
        onClick={() => setTheme("light")}
      />
    );
  } else {
    return (
      <FiMoon
        className="w-7 h-7 "
        role="button"
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default renderThemeChanger;
