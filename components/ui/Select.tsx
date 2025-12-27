// ============================================================================
// REUSABLE SELECT COMPONENT
// Consistent form select styling across the application
// ============================================================================

import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
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
// SELECT COMPONENT
// ============================================================================

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  hint,
  options,
  placeholder,
  variant = 'default',
  fullWidth = true,
  className = '',
  id,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseStyles = `
    w-full px-4 py-3 pr-10 rounded-xl border text-white
    appearance-none cursor-pointer
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
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Select Container */}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={`
            ${baseStyles}
            ${variantStyles[variant]}
            ${errorStyles}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
              className="bg-gray-900 text-white"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p 
          id={`${selectId}-error`}
          className="mt-2 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* Hint Text */}
      {hint && !error && (
        <p 
          id={`${selectId}-hint`}
          className="mt-2 text-sm text-gray-500"
        >
          {hint}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
