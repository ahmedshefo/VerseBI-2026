import React from 'react';

interface VerseBILogoProps {
  variant?: 'full' | 'mark' | 'wordmark';
  className?: string;
  markClassName?: string;
  textClassName?: string;
  animated?: boolean;
  glow?: boolean;
  alt?: string;
}

export const VerseBILogo: React.FC<VerseBILogoProps> = ({
  variant = 'full',
  className = 'h-9 w-auto',
  markClassName = '',
  textClassName = '',
  animated = false,
  glow = false,
  alt = 'VerseBI - Data & AI Solutions',
}) => {
  // If wordmark only
  if (variant === 'wordmark') {
    return (
      <span className={`inline-flex items-center font-display font-bold tracking-tight select-none ${className} ${textClassName}`}>
        <span className="text-white">Verse</span>
        <span className="text-emerald-400 ml-0.5 font-extrabold">BI</span>
      </span>
    );
  }

  // Common SVG mark geometry (tightened viewBox around mark: 72 72 362 278)
  const renderMark = (uniqueId: string) => (
    <svg
      viewBox="72 72 362 278"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-full w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 ${markClassName} ${
        glow ? 'drop-shadow-[0_0_12px_rgba(74,222,128,0.35)]' : ''
      }`}
      role="img"
      aria-label={alt}
    >
      <defs>
        <clipPath id={`${uniqueId}CircleClip`}>
          <circle cx="368" cy="140" r="62" />
        </clipPath>
      </defs>

      {/* Network Globe Disc */}
      <g className={animated ? 'animate-pulse' : ''} style={{ animationDuration: '4s' }}>
        <circle cx="368" cy="140" r="62" fill="#42D566" />
        <g clipPath={`url(#${uniqueId}CircleClip)`} stroke="#1A6B32" strokeWidth="2.5" opacity="0.85">
          <line x1="335" y1="120" x2="368" y2="105" />
          <line x1="368" y1="105" x2="400" y2="125" />
          <line x1="335" y1="120" x2="350" y2="155" />
          <line x1="350" y1="155" x2="385" y2="150" />
          <line x1="368" y1="105" x2="385" y2="150" />
          <line x1="400" y1="125" x2="415" y2="155" />
          <line x1="385" y1="150" x2="415" y2="155" />
          <line x1="350" y1="155" x2="370" y2="185" />
          <line x1="385" y1="150" x2="370" y2="185" />

          <circle cx="335" cy="120" r="5" fill="#1A6B32" />
          <circle cx="368" cy="105" r="5.5" fill="#1A6B32" />
          <circle cx="400" cy="125" r="5" fill="#1A6B32" />
          <circle cx="350" cy="155" r="5" fill="#1A6B32" />
          <circle cx="385" cy="150" r="6" fill="#1A6B32" />
          <circle cx="415" cy="155" r="4.5" fill="#1A6B32" />
          <circle cx="370" cy="185" r="5" fill="#1A6B32" />
        </g>
      </g>

      {/* Left Wing (Solid Pure White Block) */}
      <polygon points="256,346 76,166 166,76 256,166" fill="#FFFFFF" />

      {/* Right Wing Data Bars */}
      <polygon points="256,346 256,236 298,236 298,304" fill="#32BF56" />

      {/* Bar 2 */}
      <polygon points="298,304 298,142 344,142 344,258" fill="#3CD367" />
      <polygon points="298,304 298,142 308,152 308,294" fill="#249841" opacity="0.6" />

      {/* Bar 3 */}
      <polygon points="344,258 344,112 376,112 376,226" fill="#2EBC55" />
      <polygon points="344,258 344,112 354,122 354,248" fill="#1C8136" opacity="0.65" />

      {/* Bar 4 */}
      <polygon points="376,226 376,124 406,124 406,196" fill="#46DC72" />
      <path d="M 256 346 L 430 172 L 406 148 L 406 196 Z" fill="#28A649" />
    </svg>
  );

  // If mark only
  if (variant === 'mark') {
    return renderMark('markOnly');
  }

  // Full lockup (Symbol + Wordmark "VerseBI")
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {renderMark('fullLockup')}

      <span className={`font-display font-bold text-xl sm:text-[22px] tracking-tight leading-none flex items-center ${textClassName}`}>
        <span className="text-white group-hover:text-slate-100 transition-colors">Verse</span>
        <span className="text-emerald-400 font-extrabold ml-0.5 drop-shadow-[0_0_8px_rgba(74,222,128,0.25)]">BI</span>
      </span>
    </div>
  );
};
