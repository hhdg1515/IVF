'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { ConcentricRings, FlowingCurve, GradientOrb, OrganicBlob } from './Decorations';

interface SectionWithNumberProps {
  number?: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  backgroundColor?: 'white' | 'cream';
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export function SectionWithNumber({
  number,
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt,
  reversed = false,
  backgroundColor = 'white',
  ctaText = 'Learn More',
  ctaHref,
  onCtaClick,
}: SectionWithNumberProps) {
  const containerBg =
    backgroundColor === 'cream'
      ? 'bg-[#f7eee7]'
      : 'bg-white';
  const numberLabel = number ? String(number).padStart(2, '0') : null;
  const isReversed = reversed;

  return (
    <section className={cn('relative overflow-hidden py-20 md:py-28', containerBg)}>
      {/* Soft glow + linework decorations (scheme A) */}
      <GradientOrb
        className={cn(
          'w-[760px] h-[760px] -top-96 text-[#a63655]/10 bg-[radial-gradient(circle_at_center,_rgba(166,54,85,0.22),_transparent_60%)]',
          isReversed ? '-right-[420px]' : '-left-[420px]'
        )}
      />
      <GradientOrb
        className={cn(
          'w-[600px] h-[600px] -bottom-96 text-[#c86b79]/12 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.65),_transparent_60%)]',
          isReversed ? '-left-[420px]' : '-right-[420px]'
        )}
      />
      <OrganicBlob
        variant={isReversed ? 2 : 1}
        className={cn(
          'w-[520px] h-[520px] blur-3xl text-[#a63655]/14',
          isReversed ? '-top-72 -left-64' : '-top-72 -right-64'
        )}
      />
      <ConcentricRings
        className={cn(
          'w-48 h-48 text-[#a63655]/28',
          isReversed ? 'left-6 bottom-10' : 'right-6 top-10'
        )}
      />
      <FlowingCurve
        direction={isReversed ? 'right' : 'left'}
        className={cn(
          'w-64 text-[#a63655]/26',
          isReversed ? 'bottom-10 left-4' : 'bottom-10 right-4'
        )}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:gap-20 lg:px-0">
        <div
          className={cn(
            'flex-1',
            reversed && 'md:order-2'
          )}
        >
          {numberLabel ? (
            <>
              <span className="font-serif italic text-[24px] text-[#a63655]">
                Step {numberLabel}
              </span>
              <h2 className="mt-4 text-[32px] md:text-[40px] leading-[1.2] text-[#212529]">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-3 text-[14px] uppercase tracking-[0.1em] text-[#6c757d]">
                  {subtitle}
                </p>
              )}
            </>
          ) : (
            <>
              {subtitle && (
                <span className="font-serif italic text-[20px] text-[#a63655]">
                  {subtitle}
                </span>
              )}
              <h2 className="mt-4 text-[32px] md:text-[40px] leading-[1.2] text-[#212529]">
                {title}
              </h2>
            </>
          )}

          <div className="mt-8 space-y-6 text-[18px] leading-[1.8] text-[#495057]">
            {typeof content === 'string' ? <p>{content}</p> : content}
          </div>

          {ctaText && (
            <div className="mt-10">
              {ctaHref ? (
                <a href={ctaHref}>
                  <Button variant="primary" size="lg">
                    {ctaText}
                  </Button>
                </a>
              ) : (
                <Button variant="primary" size="lg" onClick={onCtaClick}>
                  {ctaText}
                </Button>
              )}
            </div>
          )}
        </div>

        <div
          className={cn(
            'relative flex-1',
            reversed && 'md:order-1'
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="relative z-10 w-full rounded-[32px] border-8 border-white object-cover shadow-[0_24px_60px_rgba(45,28,36,0.12)]"
          />
        </div>
      </div>
    </section>
  );
}
