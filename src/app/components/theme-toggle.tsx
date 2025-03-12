"use client";

import { useTheme } from "next-themes";
import React from "react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Fixes hydration issue

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-0 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
