export default function Error() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={77}
      height={77}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="#ca0000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
        </path>
        <path strokeDasharray={8} strokeDashoffset={8} d="M12 7v6">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
        <path strokeDasharray={2} strokeDashoffset={2} d="M12 17v0.01">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}