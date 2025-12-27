// ============================================================================
// REUSABLE SECTION HEADER COMPONENT
// Consistent section headers across the application
// ============================================================================

import React from 'react';
import { LucideIcon } from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleGradient?: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================

export function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleGradient = 'from-white to-gray-400',
  subtitle,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignStyles[align]} ${className}`}>
      {/* Badge */}
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
          {BadgeIcon && <BadgeIcon className="w-4 h-4" aria-hidden="true" />}
          <span>{badge}</span>
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-3">
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-lg text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
