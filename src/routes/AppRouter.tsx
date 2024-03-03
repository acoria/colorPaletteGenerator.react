import { createBrowserRouter } from "react-router-dom";
import { ColorPalettePage } from "../pages/ColorPalettePage";
import { DesignExamplesPage } from "../pages/DesignExamplesPage";
import { Routes } from "./Routes";
import { ColorPaletteResultPage } from "../pages/ColorPaletteResultPage";

export const AppRouter = createBrowserRouter([
  { path: Routes.HOME, element: <ColorPalettePage /> },
  { path: Routes.DESIGN_EXAMPLES, element: <DesignExamplesPage /> },
  { path: Routes.PALETTE_AND_CODE, element: <ColorPaletteResultPage /> },
]);
