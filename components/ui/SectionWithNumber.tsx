'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface SectionWithNumberProps {
  number: number;
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
  const numberLabel = String(number).padStart(2, '0');

  return (
    <section className={cn('relative py-20 md:py-28', containerBg)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:gap-20 lg:px-0">
        <div
          className={cn(
            'flex-1',
            reversed && 'md:order-2'
          )}
        >
          <span className="font-script text-3xl text-[#c86b79]">
            Step {numberLabel}
          </span>
          <h2 className="mt-3 text-4xl md:text-[44px] leading-tight text-[#2f2b33]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#8b858d]">
              {subtitle}
            </p>
          )}

          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-[#5a555d]">
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
          <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-[32px] bg-[#f0d7c7] opacity-50 md:block" />
          <div className="absolute -right-8 -bottom-10 hidden h-32 w-32 rounded-full border border-[#d7b8a4]/60 md:block" />

          <img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 w-full rounded-[32px] border-8 border-white object-cover shadow-[0_24px_60px_rgba(45,28,36,0.12)]"
          />
        </div>
      </div>
    </section>
  );
}
