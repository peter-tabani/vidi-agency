// ============================================================================
// ACCESSIBILITY HOOKS
// React hooks for accessibility features
// ============================================================================

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { 
  trapFocus, 
  getFocusableElements, 
  prefersReducedMotion,
  announceToScreenReader 
} from '@/lib/accessibility';

// ============================================================================
// USE FOCUS TRAP HOOK
// ============================================================================

/**
 * Hook to trap focus within a container (useful for modals/dialogs)
 */
export function useFocusTrap(isActive: boolean = true) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    // Store currently focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Trap focus
    const cleanup = trapFocus(containerRef.current);

    return () => {
      cleanup();
      // Restore focus to previous element
      previousActiveElement.current?.focus();
    };
  }, [isActive]);

  return containerRef;
}

// ============================================================================
// USE KEYBOARD NAVIGATION HOOK
// ============================================================================

interface UseKeyboardNavigationOptions {
  onEnter?: () => void;
  onEscape?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onHome?: () => void;
  onEnd?: () => void;
}

/**
 * Hook for handling keyboard navigation
 */
export function useKeyboardNavigation(options: UseKeyboardNavigationOptions) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
        options.onEnter?.();
        break;
      case 'Escape':
        options.onEscape?.();
        break;
      case 'ArrowUp':
        event.preventDefault();
        options.onArrowUp?.();
        break;
      case 'ArrowDown':
        event.preventDefault();
        options.onArrowDown?.();
        break;
      case 'ArrowLeft':
        options.onArrowLeft?.();
        break;
      case 'ArrowRight':
        options.onArrowRight?.();
        break;
      case 'Home':
        event.preventDefault();
        options.onHome?.();
        break;
      case 'End':
        event.preventDefault();
        options.onEnd?.();
        break;
    }
  }, [options]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

// ============================================================================
// USE REDUCED MOTION HOOK
// ============================================================================

/**
 * Hook to detect user's reduced motion preference
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check initial preference
    setReducedMotion(prefersReducedMotion());

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

// ============================================================================
// USE ANNOUNCE HOOK
// ============================================================================

/**
 * Hook for announcing messages to screen readers
 */
export function useAnnounce() {
  const announce = useCallback((
    message: string, 
    priority: 'polite' | 'assertive' = 'polite'
  ) => {
    announceToScreenReader(message, priority);
  }, []);

  return announce;
}

// ============================================================================
// USE ROVING TABINDEX HOOK
// ============================================================================

interface UseRovingTabindexOptions {
  itemCount: number;
  orientation?: 'horizontal' | 'vertical' | 'both';
  loop?: boolean;
}

/**
 * Hook for implementing roving tabindex pattern
 */
export function useRovingTabindex({
  itemCount,
  orientation = 'vertical',
  loop = true,
}: UseRovingTabindexOptions) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const getNextIndex = useCallback((current: number, direction: 1 | -1): number => {
    const next = current + direction;
    if (loop) {
      if (next < 0) return itemCount - 1;
      if (next >= itemCount) return 0;
    } else {
      if (next < 0) return 0;
      if (next >= itemCount) return itemCount - 1;
    }
    return next;
  }, [itemCount, loop]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    let handled = false;

    switch (event.key) {
      case 'ArrowUp':
        if (orientation === 'vertical' || orientation === 'both') {
          setFocusedIndex(prev => getNextIndex(prev, -1));
          handled = true;
        }
        break;
      case 'ArrowDown':
        if (orientation === 'vertical' || orientation === 'both') {
          setFocusedIndex(prev => getNextIndex(prev, 1));
          handled = true;
        }
        break;
      case 'ArrowLeft':
        if (orientation === 'horizontal' || orientation === 'both') {
          setFocusedIndex(prev => getNextIndex(prev, -1));
          handled = true;
        }
        break;
      case 'ArrowRight':
        if (orientation === 'horizontal' || orientation === 'both') {
          setFocusedIndex(prev => getNextIndex(prev, 1));
          handled = true;
        }
        break;
      case 'Home':
        setFocusedIndex(0);
        handled = true;
        break;
      case 'End':
        setFocusedIndex(itemCount - 1);
        handled = true;
        break;
    }

    if (handled) {
      event.preventDefault();
    }
  }, [orientation, getNextIndex, itemCount]);

  const getTabIndex = useCallback((index: number): 0 | -1 => {
    return index === focusedIndex ? 0 : -1;
  }, [focusedIndex]);

  return {
    focusedIndex,
    setFocusedIndex,
    handleKeyDown,
    getTabIndex,
  };
}

// ============================================================================
// USE FOCUS VISIBLE HOOK
// ============================================================================

/**
 * Hook to detect if focus should be visible (keyboard navigation)
 */
export function useFocusVisible(): boolean {
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setFocusVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return focusVisible;
}

// ============================================================================
// USE ESCAPE KEY HOOK
// ============================================================================

/**
 * Hook to handle escape key press
 */
export function useEscapeKey(callback: () => void, isActive: boolean = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [callback, isActive]);
}

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  useFocusTrap,
  useKeyboardNavigation,
  useReducedMotion,
  useAnnounce,
  useRovingTabindex,
  useFocusVisible,
  useEscapeKey,
};
