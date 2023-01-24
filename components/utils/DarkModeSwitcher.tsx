import { useThemeState } from "./Theme.provider";

const DarkModeSwitcher = ({ replicated }: { replicated: boolean }) => {
  const { isDarkMode, setIsDarkMode, theme } = useThemeState();

  return <div>hello world</div>;
};
export default DarkModeSwitcher;
