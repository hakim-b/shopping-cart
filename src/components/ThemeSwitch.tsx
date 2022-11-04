import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import { usePrefersTheme } from "react-haiku";

export function ThemeSwitch() {
  const theme = usePrefersTheme();

  useEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <select
        data-choose-theme
        className="select select-bordered select-lg w-1/5 max-w-xs"
      >
        <option value={theme}>🖥️ &nbsp; System</option>
        <option value="light">☀️ &nbsp; Light</option>
        <option value="dark">🌙 &nbsp; Dark</option>
      </select>
    </>
  );
}
