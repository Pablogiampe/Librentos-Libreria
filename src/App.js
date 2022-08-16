import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
<div className="App">
      <NavBar />
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
   </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;