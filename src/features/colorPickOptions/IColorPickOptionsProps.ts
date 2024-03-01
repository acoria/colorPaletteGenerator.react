export interface IColorPickOptionsProps {
  className?: string;
  colors: string[];
  onColorChosen?: (color: string) => void;
  onClose?: () => void;
}
