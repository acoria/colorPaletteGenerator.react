import { ColorPaletteStepList } from "../colorPaletteStepList/colorPaletteStepList/ColorPaletteStepList";
import styles from "./ColorPaletteGenerator.module.css";

/**
 * An application to generate a color palette, show the SCSS code for it and generate design examples from it
 */
export const ColorPaletteGenerator: React.FC = () => {
  return (
    <div className={styles.colorPalette}>
      <ColorPaletteStepList />
    </div>
  );
};
