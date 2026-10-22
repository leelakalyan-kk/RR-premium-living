export const Logo = ({ light = false }) => (
  <a
    href="/"
    data-testid="logo-link"
    className="flex items-center gap-1 group"
    aria-label="GRAND — Home"
  >
    <span className="transition-transform duration-500 group-hover:rotate-[-4deg]">
      <img
        src="/logo.png"
        alt=""
        className={`h-12 w-16 object-contain ${
          light ? "" : "logo-blue-outline"
        }`}
      />
    </span>
    <span
      className={`${
        light ? "gold-text" : "gold-text-on-light"
      } font-display text-lg font-extrabold tracking-[0.08em] leading-none`}
    >
      GRAND
    </span>
  </a>
);

export default Logo;