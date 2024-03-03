import { useContext, useMemo } from "react";
import { HorizontalColorPalette } from "../horizontalColorPalette/HorizontalColorPalette";
import styles from "./ColorPaletteResult.module.css";
import { AppContext } from "../../context/AppContext";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";

export const ColorPaletteResult: React.FC = () => {
  const context = useContext(AppContext);
  const limitedNeutralColorSelector = useMemo(
    () => new LimitedNeutralColorsSelector(),
    []
  );

  return (
    <div>
      <HorizontalColorPalette
        colors={[
          ...context.primaryColors.value,
          ...limitedNeutralColorSelector.select(context.neutralColors.value),
        ]}
        title={"Color palette"}
      />
      <HorizontalColorPalette
        colors={[
          ...context.primaryColors.value,
          ...context.neutralColors.value,
        ]}
        title={"Extended color palette"}
      />
    </div>
  );
};
