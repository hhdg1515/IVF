'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  number?: number;  /* 01-08 */
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  number,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered ? 'text-center mb-12' : 'mb-12', className)}>
      {number && (
        <div className="text-6xl md:text-7xl font-serif font-bold text-[#531e44] opacity-30 mb-2">
          {String(number).padStart(2, '0')}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#32373c] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#495057] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
