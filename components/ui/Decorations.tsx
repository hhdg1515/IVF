'use client';

import { cn } from '@/lib/utils';

// Floating dots pattern - represents connection and community
export function FloatingDots({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="10" cy="10" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="40" cy="25" r="6" fill="currentColor" opacity="0.2" />
        <circle cx="80" cy="15" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="25" cy="60" r="5" fill="currentColor" opacity="0.25" />
        <circle cx="70" cy="50" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="100" cy="40" r="7" fill="currentColor" opacity="0.15" />
        <circle cx="15" cy="100" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="55" cy="90" r="5" fill="currentColor" opacity="0.2" />
        <circle cx="95" cy="85" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="110" cy="110" r="6" fill="currentColor" opacity="0.25" />
      </svg>
    </div>
  );
}

// Organic blob shape - soft and welcoming
export function OrganicBlob({ className, variant = 1 }: { className?: string; variant?: 1 | 2 | 3 }) {
  const paths = {
    1: "M50.5,10C75,10,95,30,95,55C95,80,75,100,50.5,100C26,100,6,80,6,55C6,30,26,10,50.5,10Z",
    2: "M60,15C85,20,100,45,95,70C90,95,65,105,40,95C15,85,5,60,15,35C25,10,35,10,60,15Z",
    3: "M55,5C80,10,100,35,95,60C90,85,65,100,40,95C15,90,0,65,10,40C20,15,30,0,55,5Z"
  };

  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}

// Curved line - represents journey and flow
export function FlowingCurve({ className, direction = 'right' }: { className?: string; direction?: 'right' | 'left' }) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg width="200" height="100" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
        {direction === 'right' ? (
          <path d="M0,50 Q50,10 100,50 T200,50" opacity="0.3" />
        ) : (
          <path d="M200,50 Q150,90 100,50 T0,50" opacity="0.3" />
        )}
      </svg>
    </div>
  );
}

// Half circle - architectural, modern
export function HalfCircle({ className, position = 'top' }: { className?: string; position?: 'top' | 'bottom' | 'left' | 'right' }) {
  const rotations = {
    top: 'rotate-0',
    bottom: 'rotate-180',
    left: '-rotate-90',
    right: 'rotate-90'
  };

  return (
    <div className={cn('pointer-events-none absolute', rotations[position], className)}>
      <svg viewBox="0 0 100 50" fill="currentColor" className="w-full h-full">
        <path d="M0,50 A50,50 0 0,1 100,50 L0,50 Z" />
      </svg>
    </div>
  );
}

// Concentric rings - represents growth and expansion
export function ConcentricRings({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
        <circle cx="100" cy="100" r="30" strokeWidth="1" opacity="0.4" />
        <circle cx="100" cy="100" r="50" strokeWidth="1" opacity="0.3" />
        <circle cx="100" cy="100" r="70" strokeWidth="1" opacity="0.2" />
        <circle cx="100" cy="100" r="90" strokeWidth="1" opacity="0.1" />
      </svg>
    </div>
  );
}

// Dot grid pattern - subtle texture
export function DotGrid({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
        {[...Array(5)].map((_, row) =>
          [...Array(5)].map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 20}
              cy={10 + row * 20}
              r="2"
              opacity={0.15 + (row + col) * 0.03}
            />
          ))
        )}
      </svg>
    </div>
  );
}

// Wavy line separator
export function WavySeparator({ className }: { className?: string }) {
  return (
    <div className={cn('w-full', className)}>
      <svg viewBox="0 0 1200 60" fill="none" preserveAspectRatio="none" className="w-full h-8">
        <path
          d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}

// Gradient orb - soft glowing effect
export function GradientOrb({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute rounded-full blur-3xl', className)} />
  );
}

// Pride Rainbow Arc - LGBT friendly
export function RainbowArc({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-32 h-16',
    md: 'w-48 h-24',
    lg: 'w-64 h-32'
  };

  return (
    <div className={cn('pointer-events-none absolute', sizes[size], className)}>
      <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
        <path d="M10,100 A90,90 0 0,1 190,100" stroke="#E40303" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M20,100 A80,80 0 0,1 180,100" stroke="#FF8C00" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M30,100 A70,70 0 0,1 170,100" stroke="#FFED00" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M40,100 A60,60 0 0,1 160,100" stroke="#008026" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M50,100 A50,50 0 0,1 150,100" stroke="#24408E" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M60,100 A40,40 0 0,1 140,100" stroke="#732982" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
  );
}

// Pride gradient stripe - horizontal or vertical
export function PrideStripe({ className, direction = 'horizontal' }: { className?: string; direction?: 'horizontal' | 'vertical' }) {
  const gradientId = direction === 'horizontal' ? 'pride-h' : 'pride-v';

  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg
        viewBox={direction === 'horizontal' ? "0 0 300 20" : "0 0 20 300"}
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2={direction === 'horizontal' ? "100%" : "0%"} y2={direction === 'horizontal' ? "0%" : "100%"}>
            <stop offset="0%" stopColor="#E40303" stopOpacity="0.6" />
            <stop offset="20%" stopColor="#FF8C00" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#FFED00" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#008026" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#24408E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#732982" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {direction === 'horizontal' ? (
          <rect x="0" y="0" width="300" height="20" rx="10" fill={`url(#${gradientId})`} />
        ) : (
          <rect x="0" y="0" width="20" height="300" rx="10" fill={`url(#${gradientId})`} />
        )}
      </svg>
    </div>
  );
}

// Floating hearts - fertility and love theme
export function FloatingHearts({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
        <path d="M25,15 C20,10 12,10 8,15 C4,20 4,28 8,33 L25,50 L42,33 C46,28 46,20 42,15 C38,10 30,10 25,15 Z" fill="currentColor" opacity="0.2" />
        <path d="M75,45 C72,42 67,42 64,45 C61,48 61,53 64,56 L75,67 L86,56 C89,53 89,48 86,45 C83,42 78,42 75,45 Z" fill="currentColor" opacity="0.15" />
        <path d="M120,25 C116,21 109,21 105,25 C101,29 101,36 105,40 L120,55 L135,40 C139,36 139,29 135,25 C131,21 124,21 120,25 Z" fill="currentColor" opacity="0.25" />
        <path d="M40,90 C36,86 29,86 25,90 C21,94 21,101 25,105 L40,120 L55,105 C59,101 59,94 55,90 C51,86 44,86 40,90 Z" fill="currentColor" opacity="0.18" />
        <path d="M110,100 C107,97 102,97 99,100 C96,103 96,108 99,111 L110,122 L121,111 C124,108 124,103 121,100 C118,97 113,97 110,100 Z" fill="currentColor" opacity="0.22" />
      </svg>
    </div>
  );
}

// Fertility symbol - stylized seed/ovum
export function FertilitySymbol({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.5" />
        <circle cx="35" cy="35" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="65" cy="35" r="2" fill="currentColor" opacity="0.25" />
        <circle cx="35" cy="65" r="2.5" fill="currentColor" opacity="0.2" />
        <circle cx="65" cy="65" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    </div>
  );
}

// Blooming flower - represents growth and new life
export function BloomingFlower({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <ellipse cx="60" cy="30" rx="15" ry="25" fill="currentColor" opacity="0.2" />
        <ellipse cx="60" cy="90" rx="15" ry="25" fill="currentColor" opacity="0.2" />
        <ellipse cx="30" cy="60" rx="25" ry="15" fill="currentColor" opacity="0.2" />
        <ellipse cx="90" cy="60" rx="25" ry="15" fill="currentColor" opacity="0.2" />
        <ellipse cx="38" cy="38" rx="18" ry="12" fill="currentColor" opacity="0.15" transform="rotate(-45 38 38)" />
        <ellipse cx="82" cy="38" rx="18" ry="12" fill="currentColor" opacity="0.15" transform="rotate(45 82 38)" />
        <ellipse cx="38" cy="82" rx="18" ry="12" fill="currentColor" opacity="0.15" transform="rotate(45 38 82)" />
        <ellipse cx="82" cy="82" rx="18" ry="12" fill="currentColor" opacity="0.15" transform="rotate(-45 82 82)" />
        <circle cx="60" cy="60" r="12" fill="currentColor" opacity="0.35" />
      </svg>
    </div>
  );
}

// Inclusive family silhouettes
export function InclusiveFamily({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
        {/* Two figures holding hands with child */}
        <circle cx="40" cy="25" r="12" fill="currentColor" opacity="0.25" />
        <path d="M40,40 L40,70 M30,50 L50,50 M40,70 L30,95 M40,70 L50,95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.25" />

        <circle cx="90" cy="35" r="8" fill="currentColor" opacity="0.3" />
        <path d="M90,45 L90,65 M82,52 L98,52 M90,65 L82,85 M90,65 L98,85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />

        <circle cx="140" cy="25" r="12" fill="currentColor" opacity="0.25" />
        <path d="M140,40 L140,70 M130,50 L150,50 M140,70 L130,95 M140,70 L150,95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.25" />

        {/* Connection lines with hearts */}
        <path d="M52,55 Q70,45 78,55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
        <path d="M102,55 Q120,45 128,55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
      </svg>
    </div>
  );
}

// Animated floating element wrapper
export function FloatingAnimation({
  children,
  className,
  duration = 6,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      className={cn('animate-float', className)}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
}

// Rainbow gradient orb
export function RainbowOrb({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-64 h-64'
  };

  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-full blur-3xl opacity-30',
        sizes[size],
        className
      )}
      style={{
        background: 'conic-gradient(from 0deg, #E40303, #FF8C00, #FFED00, #008026, #24408E, #732982, #E40303)'
      }}
    />
  );
}

// Soft layered background for gentle atmosphere
export function SoftBackdrop({
  className,
  intensity = 'light',
}: {
  className?: string;
  intensity?: 'light' | 'softer' | 'whisper';
}) {
  const intensityMap = {
    light: { primary: 0.14, accent: 0.07, neutral: 0.24, noise: 0.02 },
    softer: { primary: 0.1, accent: 0.05, neutral: 0.18, noise: 0.015 },
    whisper: { primary: 0.08, accent: 0.04, neutral: 0.14, noise: 0.012 },
  };
  const { primary, accent, neutral, noise } = intensityMap[intensity];

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div
        className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(232,213,208,${primary}), transparent 60%)`,
        }}
      />
      <div
        className="absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(200,107,121,${accent}), transparent 60%)`,
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-[240px] w-[240px] -translate-x-1/2 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(circle at center, rgba(243,230,221,${neutral}), transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: noise,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

// Thin divider for softer section transitions
export function SoftDivider({ className }: { className?: string }) {
  return (
    <div className={cn('relative h-px w-full overflow-hidden', className)} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a63655]/18 to-transparent" />
    </div>
  );
}
