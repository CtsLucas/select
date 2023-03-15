interface LevelIconProps {
  size?: number;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export default function LevelIcon({
  size = 20,
  level = 'beginner',
}: LevelIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 17 20"
    >
      <rect
        width="4"
        height="9"
        x="0.5"
        y="10.5"
        fill="#F4F4F5"
        stroke="#F4F4F5"
        rx="1.5"
      ></rect>
      <path
        fill={level === 'intermediate' ? '#F4F4F5' : 'transparent'}
        stroke="#F4F4F5"
        d="M8 5.5h1A1.5 1.5 0 0110.5 7v11A1.5 1.5 0 019 19.5H8A1.5 1.5 0 016.5 18V7A1.5 1.5 0 018 5.5z"
      ></path>
      <path
        fill={level === 'advanced' ? '#F4F4F5' : 'transparent'}
        stroke="#F4F4F5"
        d="M14 .5h1A1.5 1.5 0 0116.5 2v16a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V2A1.5 1.5 0 0114 .5z"
      ></path>
    </svg>
  );
}
