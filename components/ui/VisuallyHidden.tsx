// ============================================================================
// VISUALLY HIDDEN COMPONENT
// Content that is hidden visually but accessible to screen readers
// ============================================================================

import React from 'react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface VisuallyHiddenProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

// ============================================================================
// VISUALLY HIDDEN COMPONENT
// ============================================================================

export function VisuallyHidden({
  children,
  as: Component = 'span',
}: VisuallyHiddenProps) {
  return (
    <Component className="sr-only">
      {children}
    </Component>
  );
}

export default VisuallyHidden;
