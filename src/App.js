import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar />

      {/* { <ItemListContainer /> } */}
   <ItemDetailContainer/>
    </div>
  );
}

export default App;