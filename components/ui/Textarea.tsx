// ============================================================================
// REUSABLE TEXTAREA COMPONENT
// Consistent form textarea styling across the application
// ============================================================================

import React, { forwardRef } from 'react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  variant?: 'default' | 'glass' | 'dark';
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const variantStyles: Record<string, string> = {
  default: 'bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500/20',
  glass: 'bg-white/10 backdrop-blur-xl border-white/20 focus:border-purple-400 focus:ring-purple-400/20',
  dark: 'bg-black/50 border-white/10 focus:border-purple-500 focus:ring-purple-500/20',
};

const resizeStyles: Record<string, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
};

// ============================================================================
// TEXTAREA COMPONENT
// ============================================================================

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  hint,
  variant = 'default',
  fullWidth = true,
  resize = 'vertical',
  className = '',
  id,
  rows = 4,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseStyles = `
    w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500
    transition-all duration-200
    focus:outline-none focus:ring-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const errorStyles = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
    : '';

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Textarea */}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${resizeStyles[resize]}
          ${errorStyles}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
        {...props}
      />

      {/* Error Message */}
      {error && (
        <p 
          id={`${textareaId}-error`}
          className="mt-2 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* Hint Text */}
      {hint && !error && (
        <p 
          id={`${textareaId}-hint`}
          className="mt-2 text-sm text-gray-500"
        >
          {hint}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
