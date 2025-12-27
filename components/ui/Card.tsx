// ============================================================================
// REUSABLE CARD COMPONENT
// Glassmorphism card styling used throughout the application
// ============================================================================

import React from 'react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type CardVariant = 'default' | 'glass' | 'gradient' | 'bordered';

export interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  gradient?: string;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  as?: 'div' | 'article' | 'section';
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white/5 border border-white/10',
  glass: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10',
  gradient: 'border border-white/10',
  bordered: 'bg-transparent border-2 border-white/20',
};

const paddingStyles: Record<string, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

// ============================================================================
// CARD COMPONENT
// ============================================================================

export function Card({
  children,
  variant = 'default',
  gradient,
  className = '',
  hover = false,
  padding = 'md',
  onClick,
  as: Component = 'div',
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  
  const hoverStyles = hover 
    ? 'hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 cursor-pointer' 
    : '';
  
  const gradientBg = variant === 'gradient' && gradient 
    ? `bg-gradient-to-br ${gradient}` 
    : '';

  const classes = [
    baseStyles,
    variantStyles[variant],
    paddingStyles[padding],
    hoverStyles,
    gradientBg,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component 
      className={classes} 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Component>
  );
}

// ============================================================================
// CARD HEADER COMPONENT
// ============================================================================

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

// ============================================================================
// CARD TITLE COMPONENT
// ============================================================================

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CardTitle({ 
  children, 
  className = '', 
  gradient,
  as: Component = 'h3' 
}: CardTitleProps) {
  const gradientStyles = gradient 
    ? `bg-gradient-to-r ${gradient} bg-clip-text text-transparent` 
    : 'text-white';

  return (
    <Component className={`text-xl font-bold ${gradientStyles} ${className}`}>
      {children}
    </Component>
  );
}

// ============================================================================
// CARD DESCRIPTION COMPONENT
// ============================================================================

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-gray-400 ${className}`}>
      {children}
    </p>
  );
}

// ============================================================================
// CARD CONTENT COMPONENT
// ============================================================================

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// ============================================================================
// CARD FOOTER COMPONENT
// ============================================================================

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t border-white/10 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
