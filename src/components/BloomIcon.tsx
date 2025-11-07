interface BloomIconProps {
  size?: number;
  centerColor?: string;
  petalColor?: string;
}

const BloomIcon = ({
  size = 32,
  centerColor = '#6A1027',
  petalColor = '#EC6839'
}: BloomIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M16 8C16 8 12 10 12 14C12 16 13 17 14 17C15 17 16 16 16 15V8Z"
        fill={petalColor}
      />
      <path
        d="M16 8C16 8 20 10 20 14C20 16 19 17 18 17C17 17 16 16 16 15V8Z"
        fill={petalColor}
      />
      <path
        d="M16 24C16 24 12 22 12 18C12 16 13 15 14 15C15 15 16 16 16 17V24Z"
        fill={petalColor}
      />
      <path
        d="M16 24C16 24 20 22 20 18C20 16 19 15 18 15C17 15 16 16 16 17V24Z"
        fill={petalColor}
      />
      <path
        d="M8 16C8 16 10 12 14 12C16 12 17 13 17 14C17 15 16 16 15 16H8Z"
        fill={petalColor}
      />
      <path
        d="M24 16C24 16 22 12 18 12C16 12 15 13 15 14C15 15 16 16 17 16H24Z"
        fill={petalColor}
      />
      <circle cx="16" cy="16" r="2" fill={centerColor} />
    </svg>
  );
};

export default BloomIcon;
