"use client";

import { useState } from "react";
import Link from "next/link";

const IconLink2 = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const IconGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

const IconMoon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const IconSun = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Header() {
  const [dark, setDark] = useState(true);

  // In production: use next-themes + `useTheme()` instead of local state.
  // Add to your global CSS (Tailwind v4):
  //   @variant dark (&:where(.dark, .dark *));
  return (
    <div className={dark ? "dark" : ""}>
      <header className="
        sticky top-0 z-50 w-full
        bg-white dark:bg-[#0a0a0a]
        border-b border-black/8 dark:border-white/8
        backdrop-blur-md
        transition-colors duration-200
      ">
        <div className="
          flex items-center justify-between
          h-[52px] max-w-[1280px] mx-auto px-5
        ">

          <Link 
          href={"/"}
          className="flex items-center gap-2 cursor-pointer group">
            <span className="
              flex items-center
              text-neutral-400 dark:text-neutral-500
              group-hover:text-neutral-900 dark:group-hover:text-neutral-100
              transition-colors duration-150
            ">
              <IconLink2 />
            </span>

            <span className="
              font-mono text-sm font-medium tracking-tight
              text-neutral-900 dark:text-neutral-100
            ">
              href.dev
            </span>
          </Link>

          {/* ── Actions ── */}
          <div className="flex items-center gap-0.5">

            {/* GitHub */}
            <a
              href="https://github.com/marcfernandezo/href.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="
                flex items-center justify-center size-[34px] rounded-[7px]
                text-neutral-400 dark:text-neutral-500
                hover:bg-black/6 dark:hover:bg-white/8
                hover:text-neutral-900 dark:hover:text-neutral-100
                transition-colors duration-150
              "
            >
              <IconGithub />
            </a>

            {/* Theme toggle */}
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setDark(!dark)}
              className="
                flex items-center justify-center size-[34px] rounded-[7px]
                bg-transparent border-none cursor-pointer
                text-neutral-400 dark:text-neutral-500
                hover:bg-black/6 dark:hover:bg-white/8
                hover:text-neutral-900 dark:hover:text-neutral-100
                transition-colors duration-150
              "
            >
              {dark ? <IconSun /> : <IconMoon />}
            </button>

            {/* Divider */}
            <div className="w-px h-[18px] bg-black/8 dark:bg-white/8 mx-1.5 shrink-0" />
            
            <button
              type="button"
              className="
                group inline-flex items-center gap-1.5
                px-3.5 h-[34px] rounded-[7px]
                border-none cursor-pointer whitespace-nowrap
                bg-neutral-900 dark:bg-white
                text-white dark:text-neutral-900
                font-mono text-[13px] font-medium tracking-tight
                hover:bg-neutral-700 dark:hover:bg-neutral-200
                active:translate-x-0.5
                transition-all duration-150
              "
            >
              Get Started
              <span className="
                flex items-center
                group-hover:translate-x-0.5
                transition-transform duration-150
              ">
                <IconArrowRight />
              </span>
            </button>

          </div>
        </div>
      </header>
    </div>
  );
}