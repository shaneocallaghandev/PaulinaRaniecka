// Thin water-line ornament used as a section divider
const Wave = ({ className = "" }) => (
  <svg className={`wave ${className}`} viewBox="0 0 120 16" fill="none" aria-hidden="true">
    <path
      d="M0 8c10 0 10-6 20-6s10 6 20 6 10-6 20-6 10 6 20 6 10-6 20-6 10 6 20 6"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export default Wave;
