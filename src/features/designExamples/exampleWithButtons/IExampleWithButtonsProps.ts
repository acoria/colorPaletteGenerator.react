import { TransformOriginHorizontal } from "./TransformOriginHorizontal";
import { TransformOriginVertical } from "./TransformOriginVertical";

export interface IExampleWithButtonProps {
  backgroundColor: string;
  titleColor: string;
  buttonsSectionTextColor: string;
  buttonsBackgroundColor: string;
  buttonsTextColor: string;
  buttonsBackgroundColorUnselected: string;
  buttonsTextColorUnselected: string;
  primaryButtonBackgroundColor: string;
  primaryButtonTextColor: string;
  headerBackgroundColor?: string;
  colors: string[];
  /** Does the component expand on click */
  suppressExpanding?: boolean;
  /** Which direction to transform from when growing on click */
  transformOriginVertical?: TransformOriginVertical;
  /** Which direction to transform from when growing on click */
  transformOriginHorizontal?: TransformOriginHorizontal;
  className?: string;
}
