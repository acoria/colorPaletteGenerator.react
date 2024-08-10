export interface IColorBarProps {
  color?: string;
  initialColorPickerColor?: string;
  onColorChange?: (color: string) => void;
  isProminent?: boolean;
}
