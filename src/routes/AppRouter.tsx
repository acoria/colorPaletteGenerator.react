import { createBrowserRouter } from "react-router-dom";
import { ColorPalettePage } from "../pages/ColorPalettePage";
import { DesignExamplesPage } from "../pages/DesignExamplesPage";
import { Route } from "./Route";
import { ColorPaletteResultPage } from "../pages/ColorPaletteResultPage";

export const AppRouter = createBrowserRouter([
  { path: Route.HOME, element: <ColorPalettePage /> },
  { path: Route.DESIGN_EXAMPLES, element: <DesignExamplesPage /> },
  { path: Route.PALETTE_AND_CODE, element: <ColorPaletteResultPage /> },
]);
