import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  forcedTheme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  forcedTheme,
}) => {
  const { theme: currentTheme } = useTheme();
  const activeTheme = forcedTheme || currentTheme;
  const isDark = activeTheme === 'dark';

  // Sizing definitions
  const dimensions = {
    sm: { iconSize: 28, textClass: 'text-lg', dotSize: 'h-1.5 w-1.5', taglineClass: 'text-[8px] tracking-[0.2em]' },
    md: { iconSize: 36, textClass: 'text-2xl', dotSize: 'h-1.5 w-1.5', taglineClass: 'text-[9px] tracking-[0.22em]' },
    lg: { iconSize: 44, textClass: 'text-3xl', dotSize: 'h-2 w-2', taglineClass: 'text-[10px] tracking-[0.25em]' },
    xl: { iconSize: 56, textClass: 'text-4xl', dotSize: 'h-2.5 w-2.5', taglineClass: 'text-[11px] tracking-[0.28em]' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* 3D Geometric Faceted Brand Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Luminous ambient glow behind emblem in dark mode */}
        {isDark && (
          <div
            className="absolute -inset-1 rounded-xl bg-cyan-500/20 blur-md group-hover:bg-cyan-400/30 transition-all duration-300 pointer-events-none"
            aria-hidden="true"
          />
        )}

        <svg
          width={dimensions.iconSize}
          height={dimensions.iconSize}
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative transform transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Primary Cyan-Blue Gradient */}
            <linearGradient id={`logo-primary-${activeTheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>

            {/* Accent Indigo-Violet Gradient */}
            <linearGradient id={`logo-accent-${activeTheme}`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* Metallic Facet Specular Highlight */}
            <linearGradient id={`logo-highlight-${activeTheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={isDark ? "0.9" : "0.7"} />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.15" />
            </linearGradient>

            {/* Shadow Facet for 3D depth */}
            <linearGradient id={`logo-shadow-${activeTheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#0C4A6E" : "#0284C7"} />
              <stop offset="100%" stopColor={isDark ? "#021C35" : "#0369A1"} />
            </linearGradient>
          </defs>

          {/* Background circular halo */}
          <circle
            cx="26"
            cy="26"
            r="23"
            fill={isDark ? "#082F49" : "#E0F2FE"}
            fillOpacity={isDark ? "0.45" : "0.5"}
            className="transition-colors"
          />

          {/* Outer Facets forming the stylized 3D geometric "X" */}
          {/* Top-Left to Center Arm */}
          <path
            d="M 12 10 L 26 26 L 19 33 L 5 19 Z"
            fill={`url(#logo-primary-${activeTheme})`}
            className="transition-all"
          />

          {/* Top-Right to Center Arm */}
          <path
            d="M 40 10 L 26 26 L 33 33 L 47 19 Z"
            fill={`url(#logo-accent-${activeTheme})`}
            className="transition-all"
          />

          {/* Bottom-Left Arm (Depth facet) */}
          <path
            d="M 26 26 L 12 42 L 5 33 L 19 19 Z"
            fill={`url(#logo-shadow-${activeTheme})`}
            className="transition-all"
          />

          {/* Bottom-Right Arm */}
          <path
            d="M 26 26 L 40 42 L 47 33 L 33 19 Z"
            fill={`url(#logo-primary-${activeTheme})`}
            className="transition-all"
          />

          {/* Center Faceted Prism Diamond */}
          <polygon
            points="26,14 36,26 26,38 16,26"
            fill={`url(#logo-accent-${activeTheme})`}
            opacity="0.95"
          />

          {/* Light Reflection Highlight on Top Crest */}
          <polygon
            points="26,14 32,23 26,26 20,23"
            fill={`url(#logo-highlight-${activeTheme})`}
          />

          {/* Center Gleam Star */}
          <circle
            cx="26"
            cy="26"
            r="2.5"
            fill="#FFFFFF"
            className="drop-shadow-sm"
          />
        </svg>
      </div>

      {/* Brand Name & Optional Tagline */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-display font-extrabold tracking-tight transition-colors duration-200 ${dimensions.textClass} ${
              isDark
                ? 'text-white group-hover:text-slate-100'
                : 'text-slate-900 group-hover:text-slate-950'
            }`}
          >
            Strate
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400">
              X
            </span>
          </span>

          {/* Luminous brand dot */}
          <span
            className={`rounded-full bg-cyan-400 transition-all duration-300 group-hover:scale-125 ${dimensions.dotSize} ${
              isDark ? 'shadow-sm shadow-cyan-400/80' : ''
            }`}
          />
        </div>

        {showTagline && (
          <span
            className={`font-bold font-sans uppercase mt-1 transition-colors ${dimensions.taglineClass} ${
              isDark ? 'text-cyan-400/90' : 'text-cyan-700'
            }`}
          >
            Soluções Digitais
          </span>
        )}
      </div>
    </div>
  );
};
