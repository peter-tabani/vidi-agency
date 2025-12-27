// ============================================================================
// REUSABLE GRADIENT BACKGROUND COMPONENT
// Animated gradient blobs used throughout the application
// ============================================================================

import React from 'react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface GradientBlobProps {
  color: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  opacity?: number;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  animate?: boolean;
  className?: string;
}

export interface GradientBackgroundProps {
  children?: React.ReactNode;
  blobs?: GradientBlobProps[];
  className?: string;
  preset?: 'hero' | 'section' | 'card' | 'minimal';
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const sizeStyles: Record<string, string> = {
  sm: 'w-32 h-32',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
  xl: 'w-[500px] h-[500px]',
};

const blurStyles: Record<string, string> = {
  sm: 'blur-xl',
  md: 'blur-2xl',
  lg: 'blur-3xl',
  xl: 'blur-[100px]',
  '2xl': 'blur-[150px]',
  '3xl': 'blur-[200px]',
};

// ============================================================================
// PRESET CONFIGURATIONS
// ============================================================================

const presets: Record<string, GradientBlobProps[]> = {
  hero: [
    { color: 'bg-purple-500', size: 'xl', position: { top: '10%', left: '20%' }, opacity: 0.3, blur: '3xl', animate: true },
    { color: 'bg-pink-500', size: 'lg', position: { top: '30%', right: '15%' }, opacity: 0.2, blur: '3xl', animate: true },
    { color: 'bg-orange-500', size: 'md', position: { bottom: '20%', left: '30%' }, opacity: 0.2, blur: '2xl', animate: true },
  ],
  section: [
    { color: 'bg-purple-500', size: 'lg', position: { top: '0', left: '25%' }, opacity: 0.15, blur: '3xl' },
    { color: 'bg-blue-500', size: 'md', position: { bottom: '10%', right: '20%' }, opacity: 0.1, blur: '2xl' },
  ],
  card: [
    { color: 'bg-purple-500', size: 'sm', position: { top: '-10%', right: '-10%' }, opacity: 0.2, blur: 'xl' },
  ],
  minimal: [
    { color: 'bg-purple-500', size: 'md', position: { top: '50%', left: '50%' }, opacity: 0.1, blur: '3xl' },
  ],
};

// ============================================================================
// GRADIENT BLOB COMPONENT
// ============================================================================

export function GradientBlob({
  color,
  size = 'md',
  position = {},
  opacity = 0.2,
  blur = 'xl',
  animate = false,
  className = '',
}: GradientBlobProps) {
  const positionStyle: React.CSSProperties = {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
    opacity,
  };

  return (
    <div
      className={`
        absolute rounded-full pointer-events-none
        ${color}
        ${sizeStyles[size]}
        ${blurStyles[blur]}
        ${animate ? 'animate-pulse' : ''}
        ${className}
      `}
      style={positionStyle}
      aria-hidden="true"
    />
  );
}

// ============================================================================
// GRADIENT BACKGROUND COMPONENT
// ============================================================================

export function GradientBackground({
  children,
  blobs,
  className = '',
  preset,
}: GradientBackgroundProps) {
  const blobsToRender = blobs || (preset ? presets[preset] : []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {blobsToRender.map((blob, index) => (
          <GradientBlob key={index} {...blob} />
        ))}
      </div>

      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}

export default GradientBackground;
