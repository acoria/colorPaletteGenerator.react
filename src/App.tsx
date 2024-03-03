import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { AppRouter } from "./routes/AppRouter";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          primaryColors: useValue([""]),
          neutralColors: useValue([""]),
          // primaryColors: useValue(["#FE8E19", "#FFA648", "#FEDDBA"]),
          // neutralColors: useValue(["#033465", "#134b86","#1d5a9a", "#3d76b8", "#4588d3", "#6ea2dd", "#E7F3FF"]),
          selectedNavItemRoute: useValue<Routes>(Routes.HOME),
        }}
      >
        <RouterProvider router={AppRouter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;