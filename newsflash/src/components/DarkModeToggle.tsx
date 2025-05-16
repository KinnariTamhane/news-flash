'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="border rounded-2xl py-1 px-3 text-sm top-[2%] right-[1%] fixed cursor-pointer bg-white dark:bg-gray-800 dark:text-white transition"
    >
      {isDark ? '🌙 Light Theme' : '🔆 Dark Theme'}
    </button>
  );
}
