"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  // Using mounted state to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="absolute top-4 right-4">
        <button
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium transition-colors"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Kings Barber
        </h1>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
          Premium cuts for the modern gentleman. Experience the difference.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
          <h3 className="font-semibold mb-2">Modern Cut</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Precision styling for a sharp look.
          </p>
        </div>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
          <h3 className="font-semibold mb-2">Classic Shave</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hot towel service included.
          </p>
        </div>
      </div>
    </main>
  );
}
