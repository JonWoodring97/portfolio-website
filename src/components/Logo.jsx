export default function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Jon Woodring — home">
      <svg
        className="logo-mark"
        viewBox="0 0 40 40"
        width="40"
        height="40"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="9" fill="var(--color-ink)" />
        <text
          x="20"
          y="27"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="17"
          fontWeight="700"
          letterSpacing="0.5"
          fill="var(--color-accent)"
        >
          JW
        </text>
      </svg>
      <span className="logo-name">
        <span className="logo-name-main">
          Jon <strong>Woodring</strong>
        </span>
        <span className="logo-name-tag">Agentic Solutions</span>
      </span>
    </a>
  );
}
