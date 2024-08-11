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

  const contextPrefilled = {
    primaryColors: useValue(["#DB8529", "#E4A562", "#F2D5B5"]),
    neutralColors: useValue([
      "#133D67",
      "#285480",
      "#1d5a9a",
      "#3d76b8",
      "#4588d3",
      "#6ea2dd",
      "#DFEBF7",
    ]),
    accentColor: useValue<string>("#146733"),
  };

  return (
    <div className="App">
      <AppContext.Provider
        // value={context}
        value={contextPrefilled}
      >
        <RouterProvider router={AppRouter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
