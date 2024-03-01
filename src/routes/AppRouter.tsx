import { createBrowserRouter } from "react-router-dom";
import { ColorPalettePage } from "../pages/ColorPalettePage";
import { DesignExamplesPage } from "../pages/DesignExamplesPage";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <ColorPalettePage /> },
  { path: "/designExamples", element: <DesignExamplesPage /> },
]);
