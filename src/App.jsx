import "./App.scss";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://6748ad4a5801f5153591d1e2.mockapi.io/";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // через библиотеку axios;
  useEffect(() => {
    axios.get(`${url}sneakers`).then((res) => {
      setItems(res.data);
    });
    axios.get(`${url}cart`).then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onRemoveItem = (id) => {
    console.log(id);
    // axios.delete(`${url}${el.id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* // через асинхронную функцию
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${url}sneakers`
      );
      const data = await res.json();
      setItems(data);
    }
    fetchData();
  }, []); */

  const onAddToCart = (el) => {
    const itemIndexAll = items.find((index) => index.id === el.id);
    const isSearchCard = cartItems.some((index) => index.id === el.id);

    if (el.id === itemIndexAll.id && !isSearchCard) {
      axios.post(`${url}cart`, el);
      setCartItems((prev) => [...prev, el]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>
            {searchValue
              ? `Поиска по запросу: ${searchValue}`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="Clear"
                onClick={() => setSearchValue("")}
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <>
                <Card
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onClickFavorite={() => console.log("Добавили в закладки")}
                  onPlus={() => {
                    onAddToCart(item);
                  }}
                />
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
