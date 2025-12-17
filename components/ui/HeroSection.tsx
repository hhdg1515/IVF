'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface HeroSectionProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  onPrimaryCtaClick?: () => void;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  onSecondaryCtaClick?: () => void;
  className?: string;
  showScrollIndicator?: boolean;
  stats?: Array<{ value: string; label: string }>;
  highlight?: {
    title: string;
    description: string;
  };
  priority?: boolean;
}

export function HeroSection({
  backgroundImage,
  backgroundVideo,
  title,
  subtitle,
  eyebrow = 'Integrative Fertility Medicine',
  primaryCtaText = 'Book Free Consultation',
  primaryCtaHref,
  onPrimaryCtaClick,
  secondaryCtaText = 'Discover The OvuMethod',
  secondaryCtaHref,
  onSecondaryCtaClick,
  className,
  showScrollIndicator = false,
  priority = false,
  stats = [
    { value: '92%', label: 'Personalized success rates' },
    { value: '15+', label: 'Years integrative practice' },
    { value: '2,000+', label: 'Families supported' },
  ],
  highlight = {
    title: 'The OvuMethod™',
    description: 'A science-backed framework guiding you from assessment to a healthy pregnancy.',
  },
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-[#f7eee7]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_left,_rgba(200,107,121,0.18),_transparent_55%)] md:block" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border-2 border-[#d8bca6]/60" />
        <div className="absolute -top-24 right-10 h-56 w-56 rounded-full border-2 border-[#e4cdbc]/50" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-16 md:py-28 lg:px-0">
        <div className="flex flex-col justify-center">
          <span className="font-serif italic text-[26px] text-[#a63655] md:text-[30px]">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-[36px] leading-[1.15] text-[#212529] md:text-[48px] lg:text-[56px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-[18px] leading-[1.7] text-[#495057]">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {primaryCtaText && (
              primaryCtaHref ? (
                <a href={primaryCtaHref}>
                  <Button variant="primary" size="lg">
                    {primaryCtaText}
                  </Button>
                </a>
              ) : (
                <Button variant="primary" size="lg" onClick={onPrimaryCtaClick}>
                  {primaryCtaText}
                </Button>
              )
            )}

            {secondaryCtaText && (
              secondaryCtaHref ? (
                <a href={secondaryCtaHref}>
                  <Button variant="outline" size="lg">
                    {secondaryCtaText}
                  </Button>
                </a>
              ) : (
                <Button variant="outline" size="lg" onClick={onSecondaryCtaClick}>
                  {secondaryCtaText}
                </Button>
              )
            )}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-[36px] font-light tracking-tight text-[#a63655]">{value}</span>
                <span className="text-[14px] uppercase tracking-[0.08em] text-[#6c757d]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-end justify-center">
          <div className="absolute inset-0 rounded-xl bg-[#a63655]/5" />
          <div className="relative w-full max-w-[520px] rounded-xl border-[8px] border-white shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
            {backgroundVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full rounded-lg object-cover"
              >
                <source src={backgroundVideo} type="video/mp4" />
              </video>
            ) : backgroundImage ? (
              <Image
                src={backgroundImage}
                alt="Fertility journey"
                width={520}
                height={520}
                priority={priority}
                loading={priority ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 100vw, 520px"
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <div className="h-[420px] w-full rounded-lg bg-[#a63655]" />
            )}

            {highlight && (
              <div className="absolute -bottom-10 left-8 rounded-lg bg-white px-6 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <span className="font-serif italic text-[22px] text-[#a63655]">
                  {highlight.title}
                </span>
                <p className="mt-2 max-w-[220px] text-[15px] leading-[1.6] text-[#495057]">
                  {highlight.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.32em] text-[#8b858d]">
            <span>Scroll</span>
            <svg
              className="h-8 w-8 animate-bounce text-[#a63655]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" d="M12 5v14" />
              <path strokeLinecap="round" d="m5 12 7 7 7-7" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
