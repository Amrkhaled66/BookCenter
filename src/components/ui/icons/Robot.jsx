export default function Robot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={74}
      height={74}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="#ef4565"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={72}
          strokeDashoffset={72}
          d="M12 3h7v18h-14v-18h7Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="72;0"
          ></animate>
        </path>
        <path
          strokeDasharray={12}
          strokeDashoffset={12}
          strokeWidth={1}
          d="M14.5 3.5v3h-5v-3"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path strokeDasharray={8} strokeDashoffset={8} d="M9 13h6">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.9s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
