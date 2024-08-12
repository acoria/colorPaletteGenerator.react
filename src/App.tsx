import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { AppRouter } from "./routes/AppRouter";

function App() {
  const context = {
    primaryColors: useValue<string[]>([]),
    neutralColors: useValue<string[]>([]),
    accentColor: useValue<string>("#FFFFFF"),
  };

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <RouterProvider router={AppRouter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
