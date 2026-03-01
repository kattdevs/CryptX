export default function SparkLine({ path, color }) {
  return (
    <svg
      viewBox="0 0 90 30"
      style={{ width: 90, height: 36, flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}