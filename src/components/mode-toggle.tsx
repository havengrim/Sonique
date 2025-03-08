import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <div className="">
      <Button
        variant="ghost"
        className="rounded-full p-2 md:p-3"
        size="icon"
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <Sun className="h-8 w-8 text-white" />
        ) : (
          <Moon className="h-8 w-8" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
