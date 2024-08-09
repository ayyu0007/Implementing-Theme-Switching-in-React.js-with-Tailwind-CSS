import React, { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../lib/utils";

const themes = {
  light: [
    { name: "zinc", color: "bg-zinc-950" },
    { name: "orange", color: "bg-orange-500" },
    { name: "red", color: "bg-red-500" },
    { name: "blue", color: "bg-blue-500" },
    { name: "green", color: "bg-green-500" },
  ],
  dark: [
    { name: "zinc", color: "bg-zinc-100" },
    { name: "orange", color: "bg-orange-500" },
    { name: "red", color: "bg-red-500" },
    { name: "blue", color: "bg-blue-500" },
    { name: "green", color: "bg-green-500" },
  ],
};

const DarkLightToggle = () => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mode") || "light";
    }
    return "light"; // Default to "light" mode if window is undefined
  });
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleModeChange = (newMode) => {
    const selectedTheme = theme?.split("-")[1];
    const newTheme = `${newMode}-${selectedTheme}`;
    setMode(newMode);
    setTheme(newTheme);
  };

  return (
    <div className="col-span-1 bg-background border-accent border-2 text-accent rounded-lg p-6 mt-4 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 border-b border-accent pb-2">Update Account Settings</h3>

      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Customize Theme</h4>
        <div className="flex flex-col gap-3">
          <button
            className={cn(
              "flex items-center gap-x-2 py-2 px-4 rounded-md text-sm border border-accent hover:bg-background transition",
              mode === "light" && "border-2 border-border"
            )}
            onClick={() => handleModeChange("light")}
          >
            <Sun className="w-5 h-5" />
            Light
          </button>
          <button
            className={cn(
              "flex items-center gap-x-2 py-2 px-4 rounded-md text-sm border border-accent hover:bg-background transition",
              mode === "dark" && "border-2 border-border"
            )}
            onClick={() => handleModeChange("dark")}
          >
            <Moon className="w-5 h-5" />
            Dark
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-2">Colors</h4>
        <div className="grid grid-cols-2 gap-4">
          {themes[mode]?.map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={() => setTheme(mode + "-" + themeOption.name)}
              className={cn(
                "flex items-center gap-x-2 border border-accent py-2 px-4 rounded-md text-sm text-foreground hover:bg-background transition ease-in",
                theme === mode + "-" + themeOption.name && "border-2 border-border"
              )}
            >
              <div
                className={`w-6 h-6 rounded-full border shrink-0 ${themeOption.color}`}
              />
              {themeOption.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DarkLightToggle;
