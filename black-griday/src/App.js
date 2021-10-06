import "./App.css";
import { useState } from "react";
import GerarPromocao from "./components/GerarPromocao";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [useProduct, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [promoList, setPromoList] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <GerarPromocao
          promoList={promoList}
          setPromoList={setPromoList}
          useProduct={useProduct}
        />
        <div className="bot">
          <ProductList
            promoList={promoList}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
          <Cart currentSale={currentSale} />
        </div>
      </header>
    </div>
  );
}

export default App;
