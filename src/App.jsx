import "./App.scss";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://6748ad4a5801f5153591d1e2.mockapi.io/sneakers"
      );
      const data = await res.json();
      setItems(data);
    }
    fetchData();
  }, []);

  const onAddToCart = (el) => {
    console.log(items.id);
    console.log(el);
    console.log(items.includes(el));
    if (el !== cartItems) {
      setCartItems((prev) => [...prev, el]);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((el) => (
            <Card
              id={el.id}
              title={el.title}
              price={el.price}
              imageUrl={el.imageUrl}
              onClickFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
