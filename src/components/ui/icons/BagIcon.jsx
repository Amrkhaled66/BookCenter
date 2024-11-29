export default function BagIcon() {
  return (
    <div className="rounded-full bg-main-text--color px-2 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path
            strokeDasharray={64}
            strokeDashoffset={64}
            d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="64;0"
            ></animate>
          </path>
          <path
            strokeDasharray={16}
            strokeDashoffset={16}
            d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="16;0"
              // repeatCount="indefinite"
              onAnimationEnd={(e) => {
                e.target.beginElement();
              }}
            ></animate>
          </path>
        </g>
      </svg>
    </div>
  );
}
