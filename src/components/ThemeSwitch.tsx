import React, { useEffect } from "react";
import { themeChange } from "theme-change";

export function ThemeSwitch() {
  useEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <div className="btn-group">
        <input
          type="radio"
          name="options"
          data-title="☀️"
          className="btn btn-ghost text-xl"
          data-set-theme="emerald"
          data-act-class="ACTIVECLASS"
        />
        <input
          type="radio"
          name="options"
          data-title="🌙"
          className="btn btn-ghost text-xl"
          data-set-theme="dracula"
          data-act-class="ACTIVECLASS"
        />
      </div>
    </>
  );
}
