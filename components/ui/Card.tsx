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
        'relative overflow-hidden rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
        hover && 'transition duration-200 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]',
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
