import { createBrowserRouter } from "react-router-dom";
import { ColorPaletteGenerator } from "../features/colorPaletteGenerator/ColorPaletteGenerator";
import { ColorResult } from "../features/colorResult/ColorResult";
import { DesignExamples } from "../features/designExamples/DesignExamples";
import { Page } from "../pages/Page";
import { Routes } from "./Routes";

export const AppRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Page />,
    children: [
      { path: Routes.HOME, element: <ColorPaletteGenerator /> },
      { path: Routes.DESIGN_EXAMPLES, element: <DesignExamples /> },
      { path: Routes.PALETTE_AND_CODE, element: <ColorResult /> },
    ],
  },
]);

export const urlParamsColors = "colors"