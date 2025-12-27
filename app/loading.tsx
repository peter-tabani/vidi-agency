// ============================================================================
// GLOBAL LOADING STATE
// Displayed during page transitions and data fetching
// ============================================================================

export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative text-center">
        {/* Loading Spinner */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-16 h-16 rounded-full border-4 border-white/10" />
            {/* Spinning ring */}
            <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
            {/* Inner gradient */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-400/20 animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 animate-pulse">Loading...</p>
      </div>
    </main>
  );
}
