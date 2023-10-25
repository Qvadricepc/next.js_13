import { CircularProgressWrapper } from "@/components/circular-progress/styles";

const CircularProgress = ({
  size,
  color,
  strokeWidth,
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) => {
  const circleSize = size || 100;
  const circleColor = color || "#007bff";
  const circleStrokeWidth = strokeWidth || 8;

  return (
    <CircularProgressWrapper
      size={circleSize}
      color={circleColor}
      strokeWidth={circleStrokeWidth}
    />
  );
};

export default CircularProgress;
