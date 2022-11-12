import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import { usePrefersTheme } from "react-haiku";

export function ThemeDropdown() {
  const systemTheme = usePrefersTheme();

  useEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <select
        data-choose-theme
        className="select select-bordered select-lg lg:w-1/4 md:w-1/3 sm:w-1/2"
      >
        <option value={systemTheme === "dark" ? "dracula" : "emerald"}>
          🖥️ &nbsp; System
        </option>
        <option value="emerald">☀️ &nbsp; Light</option>
        <option value="dracula">🌙 &nbsp; Dark</option>
      </select>
    </>
  );
}
