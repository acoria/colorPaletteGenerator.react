import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { AppRouter } from "./routes/AppRouter";
import { Route } from "./routes/Route";

function App() {
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          primaryColors: useValue([""]),
          neutralColors: useValue([""]),
          selectedNavItemRoute: useValue<Route>(Route.HOME),
        }}
      >
        <RouterProvider router={AppRouter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
