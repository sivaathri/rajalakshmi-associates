import React from 'react';
import emblemImg from '../assets/logo.png';
import footerEmblemImg from '../assets/footer logo.png';

export const Logo = ({ 
  className = "h-9 xs:h-11 sm:h-13 md:h-14 lg:h-16",
  variant = "default" // "default" for light background (header), "light" for dark background (footer)
}) => {
  const isLightVariant = variant === "light";
  const currentEmblem = isLightVariant ? footerEmblemImg : emblemImg;

  return (
    <div className={`flex items-center gap-2 sm:gap-3.5 select-none ${className}`}>
      {/* 1. CROWN & LAUREL WREATH EMBLEM MARK */}
      <img
        src={currentEmblem}
        alt="Rajalakshmy Associates Emblem"
        className={`h-full w-auto object-contain shrink-0 transition-transform duration-300 hover:scale-105 ${
          isLightVariant ? 'brightness-110 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]' : ''
        }`}
      />

      {/* 2. RAJALAKSHMY ASSOCIATES TEXT BRANDING */}
      <svg
        viewBox="0 0 520 140"
        className="h-[85%] sm:h-[90%] w-auto object-contain"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Rajalakshmy Associates Text"
      >
        <defs>
          {/* Maroon Gradient for RAJALAKSHMY on Light BG */}
          <linearGradient id="logoMaroonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#840A21" />
            <stop offset="50%" stopColor="#6D0014" />
            <stop offset="100%" stopColor="#4A000D" />
          </linearGradient>

          {/* Pure White Gradient for Dark BG */}
          <linearGradient id="logoWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>

          {/* Shimmering Rich Metallic Gold Gradient for ASSOCIATES & Lines */}
          <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#966810" />
            <stop offset="30%" stopColor="#C8931F" />
            <stop offset="50%" stopColor="#D89E1B" />
            <stop offset="70%" stopColor="#C8931F" />
            <stop offset="100%" stopColor="#966810" />
          </linearGradient>

          <filter id="logoTextShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.12" />
          </filter>
        </defs>

        <g filter="url(#logoTextShadow)">
          {/* Top Line Text: RAJALAKSHMY */}
          <text
            x="260"
            y="65"
            textAnchor="middle"
            fill={isLightVariant ? "url(#logoWhiteGrad)" : "#700619"}
            style={{
              fontFamily: "'Cinzel', 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 800,
              fontSize: "62px",
              letterSpacing: "3px"
            }}
          >
            RAJALAKSHMY
          </text>

          {/* Decorative Left Spear Line & Bulb */}
          <path
            d="M 10 110 L 35 107.5 L 75 108.5 C 79 108.5 82 105 85 105 C 89.5 105 91.5 107.5 91.5 110 C 91.5 112.5 89.5 115 85 115 C 82 115 79 111.5 75 111.5 L 35 112.5 Z"
            fill="url(#logoGoldGrad)"
          />

          {/* Bottom Line Text: ASSOCIATES */}
          <text
            x="260"
            y="119"
            textAnchor="middle"
            fill="url(#logoGoldGrad)"
            style={{
              fontFamily: "'Cinzel', 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: "28px",
              letterSpacing: "11px"
            }}
          >
            ASSOCIATES
          </text>

          {/* Decorative Right Spear Line & Bulb */}
          <path
            d="M 510 110 L 485 107.5 L 445 108.5 C 441 108.5 438 105 435 105 C 430.5 105 428.5 107.5 428.5 110 C 428.5 112.5 430.5 115 435 115 C 438 115 441 111.5 445 111.5 L 485 112.5 Z"
            fill="url(#logoGoldGrad)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
