import { ColorPaletteGenerator } from "../features/colorPaletteGenerator/ColorPaletteGenerator";
import { Page } from "./Page";

export const ColorPalettePage: React.FC = () => {
  return (
    <Page>
      <ColorPaletteGenerator />
    </Page>
  );
};
