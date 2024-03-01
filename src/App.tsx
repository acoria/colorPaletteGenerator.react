import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
