'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'outline-light';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#a63655] text-white shadow-[0_6px_16px_rgba(166,54,85,0.28)] hover:bg-[#8a2c3e] focus-visible:ring-[#d67a8e]',
  secondary:
    'bg-[#5c203d] text-white shadow-[0_6px_16px_rgba(60,22,39,0.2)] hover:bg-[#44172d] focus-visible:ring-[#c86b79]',
  outline:
    'border border-[#a63655] text-[#a63655] hover:bg-[#f7d9d9] focus-visible:ring-[#d67a8e]',
  ghost: 'text-[#5a555d] hover:bg-[#f3e6dd] focus-visible:ring-[#d67a8e]',
  'outline-light':
    'border border-white text-white hover:bg-white/10 focus-visible:ring-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[11px]',
  md: 'px-6 py-3 text-[12px]',
  lg: 'px-7 py-4 text-[12px]',
  xl: 'px-9 py-5 text-[13px]',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-semibold uppercase tracking-[0.32em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={isLoading || disabled}
      ref={ref}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export { Button };
