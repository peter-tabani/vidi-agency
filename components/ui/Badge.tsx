// ============================================================================
// REUSABLE BADGE COMPONENT
// Consistent badge/tag styling across the application
// ============================================================================

import React from 'react';
import { LucideIcon } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'gradient';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: LucideIcon;
  gradient?: string;
  className?: string;
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/10 text-gray-300 border-white/10',
  success: 'bg-green-500/20 text-green-400 border-green-500/30',
  warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  error: 'bg-red-500/20 text-red-400 border-red-500/30',
  info: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  gradient: 'text-white border-white/20',
};

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-gray-400',
  success: 'bg-green-400',
  warning: 'bg-yellow-400',
  error: 'bg-red-400',
  info: 'bg-blue-400',
  gradient: 'bg-white',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

// ============================================================================
// BADGE COMPONENT
// ============================================================================

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  gradient = 'from-purple-500 via-pink-500 to-orange-400',
  className = '',
  dot = false,
  removable = false,
  onRemove,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 rounded-full border font-medium';
  
  const gradientBg = variant === 'gradient' ? `bg-gradient-to-r ${gradient}` : '';

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    gradientBg,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {/* Status Dot */}
      {dot && (
        <span 
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}

      {/* Icon */}
      {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}

      {/* Content */}
      <span>{children}</span>

      {/* Remove Button */}
      {removable && onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 hover:opacity-70 transition-opacity"
          aria-label="Remove"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path 
              fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      )}
    </span>
  );
}

export default Badge;
