import React from 'react';

export default function Logo() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TradFlow logo"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="55%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#FB8C00" />
        </linearGradient>
        <linearGradient id="logo-fill" x1="14" y1="12" x2="34" y2="40">
          <stop offset="0%" stopColor="#E5E7FF" />
          <stop offset="42%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#logo-bg)" />
      <path d="M14 12h20v8h-6v14h-8V20h-6V12Z" fill="url(#logo-fill)" />
      <path d="M14 12h20v8h-6v12h-8V20h-6V12Z" fill="white" opacity="0.18" />
    </svg>
  );
}
