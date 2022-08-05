import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import "./App.css";;


function App() {
  return (
    <div className="App">
      <NavBar />
    
      <ItemListContainer greeting = {"greeting"}/>
    </div>
  );
}

export default App;