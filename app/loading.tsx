// ============================================================================
// GLOBAL LOADING STATE - Modern Fade In/Out Text Animation
// ============================================================================

export default function Loading() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative text-center px-4">
        {/* Main Logo Text with Fade Animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-[pulse_2s_ease-in-out_infinite]">
            Vidi Agency
          </span>
        </h1>
        
        {/* Subtitle with subtle animation */}
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base tracking-[0.2em] uppercase animate-[pulse_2s_ease-in-out_infinite] delay-100">
          Loading...
        </p>
      </div>
    </main>
  );
}