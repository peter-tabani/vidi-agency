// ============================================================================
// ACCESSIBILITY UTILITIES
// Helper functions and hooks for accessibility features
// ============================================================================

// ============================================================================
// KEYBOARD NAVIGATION HELPERS
// ============================================================================

/**
 * Key codes for common keyboard interactions
 */
export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

/**
 * Check if a key event matches a specific key
 */
export function isKey(event: KeyboardEvent | React.KeyboardEvent, key: string): boolean {
  return event.key === key;
}

/**
 * Check if Enter or Space was pressed (for button-like elements)
 */
export function isActivationKey(event: KeyboardEvent | React.KeyboardEvent): boolean {
  return isKey(event, KEYS.ENTER) || isKey(event, KEYS.SPACE);
}

/**
 * Handle keyboard activation for custom interactive elements
 */
export function handleKeyboardActivation(
  event: KeyboardEvent | React.KeyboardEvent,
  callback: () => void
): void {
  if (isActivationKey(event)) {
    event.preventDefault();
    callback();
  }
}

// ============================================================================
// FOCUS MANAGEMENT
// ============================================================================

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(', ');

  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));
}

/**
 * Trap focus within a container (useful for modals)
 */
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);
  firstElement?.focus();

  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

// ============================================================================
// ARIA HELPERS
// ============================================================================

/**
 * Generate unique IDs for ARIA relationships
 */
let idCounter = 0;
export function generateAriaId(prefix: string = 'aria'): string {
  return `${prefix}-${++idCounter}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Common ARIA attributes for interactive elements
 */
export const ariaAttributes = {
  button: {
    role: 'button',
    tabIndex: 0,
  },
  link: {
    role: 'link',
    tabIndex: 0,
  },
  dialog: {
    role: 'dialog',
    'aria-modal': true,
  },
  alert: {
    role: 'alert',
    'aria-live': 'assertive',
  },
  status: {
    role: 'status',
    'aria-live': 'polite',
  },
  menu: {
    role: 'menu',
  },
  menuItem: {
    role: 'menuitem',
  },
  tab: {
    role: 'tab',
  },
  tabPanel: {
    role: 'tabpanel',
  },
  tabList: {
    role: 'tablist',
  },
} as const;

// ============================================================================
// SCREEN READER UTILITIES
// ============================================================================

/**
 * Announce a message to screen readers
 */
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement is made
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * CSS class for visually hidden but screen reader accessible content
 */
export const srOnlyStyles = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

// ============================================================================
// REDUCED MOTION
// ============================================================================

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get animation duration based on user preference
 */
export function getAnimationDuration(defaultDuration: number): number {
  return prefersReducedMotion() ? 0 : defaultDuration;
}

// ============================================================================
// COLOR CONTRAST
// ============================================================================

/**
 * Calculate relative luminance of a color
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number }
): number {
  const l1 = getLuminance(color1.r, color1.g, color1.b);
  const l2 = getLuminance(color2.r, color2.g, color2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast ratio meets WCAG AA standard
 */
export function meetsContrastAA(
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number },
  isLargeText: boolean = false
): boolean {
  const ratio = getContrastRatio(color1, color2);
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  KEYS,
  isKey,
  isActivationKey,
  handleKeyboardActivation,
  getFocusableElements,
  trapFocus,
  generateAriaId,
  ariaAttributes,
  announceToScreenReader,
  srOnlyStyles,
  prefersReducedMotion,
  getAnimationDuration,
  getLuminance,
  getContrastRatio,
  meetsContrastAA,
};
