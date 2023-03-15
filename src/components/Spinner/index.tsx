import { SpinnerContainer } from './styles';

interface SpinnerProps {
  size?: number;
}

export default function Spinner({ size = 32 }: SpinnerProps) {
  return <SpinnerContainer size={size} />;
}
