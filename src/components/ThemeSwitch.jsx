'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <> 
      {currentTheme === 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          className=' text-gray-800 dark:text-white dark:bg-[#63636355] hover:bg-mainColor hover:text-white  bg-gray-200 bg-opacity-50] backdrop-blur-sm ease-in-out duration-300 dark:hover:bg-secondaryColor focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm px-2 py-2 text-center md:inline-block'>
          <IoSunnySharp className='text-xl' />
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          className=' text-gray-800 dark:text-white dark:bg-[#63636355] hover:bg-mainColor hover:text-white  bg-gray-200 bg-opacity-50] backdrop-blur-sm ease-in-out duration-300 dark:hover:bg-secondaryColor focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm px-2 py-2 text-center md:inline-block'>
          <IoMoonSharp className='text-xl' />
        </button>
      )}
    </>
  );
}
