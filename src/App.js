import NavBar from "./components/NavBar/NavBar";
import "./App.css";;
import itemListContainer from "./components/itemListContainer/itemListContaine"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route
              path="/"
              element={<itemListContainer greeting="Nuestro catálogo" />}
            />
    </div>
  );
}

export default App;