import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { GithubIcon, TwitterIcon, InstagramIcon } from '@/components/Icons';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const profiles = [
    {
      name: 'Instagram',
      link: '/instagram',
      Icon: InstagramIcon,
    },
    {
      name: 'Github',
      link: '/github',
      Icon: GithubIcon,
    },
    {
      name: 'Twitter',
      link: '/twitter',
      Icon: TwitterIcon,
    },
  ];

  return (
    <div className="bg-white dark:bg-black flex flex-col justify-center items-center min-h-screen">
      <nav className="flex items-center justify-between w-full max-w-4xl p-4 mx-auto my-0 text-gray-900 bg-white sticky-nav dark:bg-black bg-opacity-60 dark:text-gray-100">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-gray-800 dark:text-gray-200">
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        {/* <div>
          <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100" href="/">
            Home
          </a>
        </div> */}
      </nav>

      <main className="flex flex-col items-center w-full flex-1 px-20 pt-10 md:pt-32 text-center">
        <img
          src="https://api.abranhe.com/api/avatar"
          alt="Abraham Avatar"
          className="w-40 h-40 rounded-full"
        />
        <div className="my-10">
          <h1 className="text-5xl font-semibold text-gray-900 sm:p-4 dark:text-gray-100">
            Abraham Hernandez
          </h1>
          <h3 className="text-gray-600 sm:p-4 dark:text-gray-400">
            Fullstack Developer building software mostly with Javascript & React
            Native. <br className="hidden md:block" />
            Taking blurry pictures in my free time.
          </h3>
        </div>

        <div className="flex gap-3">
          {profiles.map(({ name, link, Icon }) => (
            <Link key={name} href={link}>
              <a>
                <Icon className="w-6 h-6 fill-current text-gray-900 dark:text-gray-100" />
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
