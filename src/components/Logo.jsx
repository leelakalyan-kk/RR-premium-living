export const LogoMark = ({ size = 42 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#0B132B" />
    <rect
      x="4.5"
      y="4.5"
      width="55"
      height="55"
      rx="11"
      stroke="#D4AF37"
      strokeOpacity="0.45"
      strokeWidth="1.5"
    />
    <path
      d="M18 27 Q32 15 46 27"
      stroke="#D4AF37"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <text
      x="32"
      y="47"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontWeight="700"
      fontSize="25"
      fill="#D4AF37"
      textAnchor="middle"
      letterSpacing="1"
    >
      RR
    </text>
  </svg>
);

export const Logo = ({ light = false }) => (
  <a
    href="/"
    data-testid="logo-link"
    className="flex items-center gap-3 group"
    aria-label="RR Premium Living — Home"
  >
    <span className="transition-transform duration-500 group-hover:rotate-[-4deg]">
      <LogoMark />
    </span>
    <span className="leading-none">
      <span
        className={`block font-display font-bold text-lg tracking-tight transition-colors duration-300 ${
          light ? "text-ivory" : "text-navy"
        }`}
      >
        RR Premium
      </span>
      <span className="block text-[10px] font-bold uppercase tracking-[0.34em] text-gold mt-1">
        Living
      </span>
    </span>
  </a>
);

export default Logo;