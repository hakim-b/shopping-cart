import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export function ThemeSwitcher() {
  useEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <SunIcon className="h-10 w-10" />
      <input
        type="checkbox"
        className="toggle toggle-lg"
        data-toggle-theme="dracula,emerald"
        data-act-class="ACTIVECLASS"
      />
      <MoonIcon className="h-10 w-10" />
    </>
  );
}
