// ============================================================================
// GLOBAL LOADING STATE
// Displayed during page transitions and data fetching
// ============================================================================

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Background Gradient - Vidi Blue/Purple */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative text-center">
        {/* Loading Spinner */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="relative">
            {/* Outer ring - Subtle Gray */}
            <div className="w-16 h-16 rounded-full border-4 border-gray-200" />
            
            {/* Spinning ring - Vidi Blue */}
            <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-600 animate-spin" />
            
            {/* Inner gradient - Blue to Purple Glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-500 font-medium animate-pulse tracking-wide">Loading Vidi Systems...</p>
      </div>
    </main>
  );
}