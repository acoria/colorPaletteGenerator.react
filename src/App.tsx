import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";

function App() {
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          primaryColors: useValue([""]),
          neutralColors: useValue([""]),
        }}
      >
        <RouterProvider router={AppRouter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
