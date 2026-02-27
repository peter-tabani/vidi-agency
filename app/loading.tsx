// ============================================================================
// GLOBAL LOADING STATE
// Displayed during page transitions and data fetching
// ============================================================================

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#05060b] flex items-center justify-center">
      {/* Background Glows - Blue/Purple */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative text-center">
        {/* Loading Spinner */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="relative">
            {/* Outer ring - subtle dark */}
            <div className="w-16 h-16 rounded-full border-4 border-white/10" />
            
            {/* Spinning ring - Blue gradient */}
            <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" />
            
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 font-medium animate-pulse tracking-wide">
          Loading Vidi Systems...
        </p>
      </div>
    </main>
  );
}