import { IconButton } from "@radix-ui/themes";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "##/components/providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <IconButton
      variant="ghost"
      color="gray"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      size="1"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </IconButton>
  );
};

export default ThemeToggle;
