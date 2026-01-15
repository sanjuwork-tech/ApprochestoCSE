export default function DiyaIcon({ className = '', title = 'Diya' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <path
        d="M32 7c5 7 6 12 4 17-1 3-4 5-4 8 0-3-3-5-4-8-2-5-1-10 4-17Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M14 36c5 14 16 21 18 21s13-7 18-21c-6 3-12 5-18 5s-12-2-18-5Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M10 35c7 4 14 6 22 6s15-2 22-6c-3 14-12 24-22 24S13 49 10 35Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.75"
      />
    </svg>
  )
}
