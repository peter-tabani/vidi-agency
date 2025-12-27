// ============================================================================
// REUSABLE INPUT COMPONENT
// Consistent form input styling across the application
// ============================================================================

import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'glass' | 'dark';
  fullWidth?: boolean;
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const variantStyles: Record<string, string> = {
  default: 'bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500/20',
  glass: 'bg-white/10 backdrop-blur-xl border-white/20 focus:border-purple-400 focus:ring-purple-400/20',
  dark: 'bg-black/50 border-white/10 focus:border-purple-500 focus:ring-purple-500/20',
};

// ============================================================================
// INPUT COMPONENT
// ============================================================================

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  hint,
  icon: Icon,
  iconPosition = 'left',
  variant = 'default',
  fullWidth = true,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseInputStyles = `
    w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500
    transition-all duration-200
    focus:outline-none focus:ring-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const iconPadding = Icon 
    ? iconPosition === 'left' ? 'pl-11' : 'pr-11'
    : '';

  const errorStyles = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
    : '';

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {Icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          className={`
            ${baseInputStyles}
            ${variantStyles[variant]}
            ${iconPadding}
            ${errorStyles}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />

        {/* Right Icon */}
        {Icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p 
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* Hint Text */}
      {hint && !error && (
        <p 
          id={`${inputId}-hint`}
          className="mt-2 text-sm text-gray-500"
        >
          {hint}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
