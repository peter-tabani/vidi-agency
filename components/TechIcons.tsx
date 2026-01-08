// components/TechIcons.tsx
export default function TechIcons() {
  return (
    <div className="flex -space-x-3">
      {/* Next.js - Official White Logo on Black */}
      <div className="w-10 h-10 rounded-full border-[2px] border-white bg-black flex items-center justify-center shadow-md z-10">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 180 180">
          <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="#fff"></circle>
          </mask>
          <g mask="url(#a)">
            <circle cx="90" cy="90" r="90" fill="#000"></circle>
            <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z" fill="url(#paint0_linear)"></path>
            <path d="M115 54h12v72h-12z" fill="url(#paint1_linear)"></path>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* TypeScript - Official Blue Logo */}
      <div className="w-10 h-10 rounded-full border-[2px] border-white bg-white flex items-center justify-center shadow-md z-20">
        <svg className="w-5 h-5" viewBox="0 0 128 128">
          <path fill="#007acc" d="M2 63.91v62.5h124V1.41H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
        </svg>
      </div>

      {/* React - Official Blue Atom Logo */}
      <div className="w-10 h-10 rounded-full border-[2px] border-white bg-[#20232a] flex items-center justify-center shadow-md z-30">
        <svg className="w-6 h-6" viewBox="-10.5 -9.45 21 18.9" fill="#61dafb">
          <circle cx="0" cy="0" r="2" fill="#61dafb"></circle>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
      </div>

      {/* OpenAI - Official Logo with Gradient */}
      <div className="w-10 h-10 rounded-full border-[2px] border-white bg-gradient-to-br from-[#412991] via-[#5c21b3] to-[#8b5cf6] flex items-center justify-center shadow-md z-40">
        <svg className="w-5 h-5" viewBox="0 0 244 244" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M122 244C189.34 244 244 189.34 244 122C244 54.6601 189.34 0 122 0C54.6601 0 0 54.6601 0 122C0 189.34 54.6601 244 122 244ZM122 225.5C177.826 225.5 225.5 177.826 225.5 122C225.5 66.1738 177.826 18.5 122 18.5C66.1738 18.5 18.5 66.1738 18.5 122C18.5 177.826 66.1738 225.5 122 225.5Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M170.624 79.9579C178.83 79.9579 184.474 85.8244 184.474 94.5593C184.474 103.294 178.83 109.162 170.624 109.162C162.418 109.162 156.773 103.294 156.773 94.5593C156.773 85.8244 162.418 79.9579 170.624 79.9579ZM73.376 79.9579C81.5819 79.9579 87.2266 85.8244 87.2266 94.5593C87.2266 103.294 81.5819 109.162 73.376 109.162C65.1701 109.162 59.5254 103.294 59.5254 94.5593C59.5254 85.8244 65.1701 79.9579 73.376 79.9579ZM122 137.221C137.29 137.221 149.796 149.727 149.796 165.016C149.796 180.305 137.29 192.811 122 192.811C106.711 192.811 94.2045 180.305 94.2045 165.016C94.2045 149.727 106.711 137.221 122 137.221Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}