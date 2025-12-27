// ============================================================================
// SKIP LINK COMPONENT
// Allows keyboard users to skip to main content
// ============================================================================

'use client';

import React from 'react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

// ============================================================================
// SKIP LINK COMPONENT
// ============================================================================

export function SkipLink({
  href = '#main-content',
  children = 'Skip to main content',
  className = '',
}: SkipLinkProps) {
  return (
    <a
      href={href}
      className={`
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
        focus:px-4 focus:py-2
        focus:bg-white focus:text-black
        focus:rounded-lg focus:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black
        font-semibold text-sm
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </a>
  );
}

export default SkipLink;
