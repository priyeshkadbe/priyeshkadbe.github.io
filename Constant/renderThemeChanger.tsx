import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
const renderThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <SunIcon
        className="w-7 h-7 "
        role="button"
        onClick={() => setTheme("light")}
      />
    );
  } else {
    return (
      <MoonIcon
        className="w-7 h-7 "
        role="button"
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default renderThemeChanger;
