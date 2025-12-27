// ============================================================================
// REUSABLE BUTTON COMPONENT
// Consistent button styling across the application
// ============================================================================

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  gradient?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  ariaLabel?: string;
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-white text-black hover:bg-gray-100',
  secondary: 'bg-gray-800 text-white hover:bg-gray-700',
  outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5',
  ghost: 'bg-transparent text-white hover:bg-white/10',
  gradient: 'text-white hover:opacity-90',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

const defaultGradient = 'from-purple-500 via-pink-500 to-orange-400';

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon: Icon,
  iconPosition = 'right',
  gradient = defaultGradient,
  className = '',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  onClick,
  ariaLabel,
}: ButtonProps) {
  // Build class string
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500';
  
  const gradientStyle = variant === 'gradient' ? `bg-gradient-to-r ${gradient}` : '';
  
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    gradientStyle,
    fullWidth ? 'w-full' : '',
    disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className,
  ].filter(Boolean).join(' ');

  // Content with optional icon
  const content = (
    <>
      {loading && (
        <svg 
          className="animate-spin h-5 w-5" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
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
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="w-5 h-5" aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="w-5 h-5" aria-hidden="true" />
      )}
    </>
  );

  // Render as link or button
  if (href && !disabled) {
    return (
      <Link 
        href={href} 
        className={classes}
        onClick={onClick as any}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {content}
    </button>
  );
}

export default Button;
