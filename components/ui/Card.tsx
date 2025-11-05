'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  colorAccent?: string;
  hover?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, colorAccent, hover = true, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-[18px] border border-[#ead9ca] bg-[#fff9f3] shadow-[0_18px_48px_rgba(58,33,43,0.08)]',
        hover && 'transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(58,33,43,0.12)]',
        className
      )}
      {...props}
    >
      {colorAccent && (
        <span
          className="absolute left-0 top-0 h-1 w-full"
          style={{ backgroundColor: colorAccent }}
        />
      )}
      {children}
    </div>
  )
);

Card.displayName = 'Card';

export { Card };
