import "./App.scss";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "./config.json";

const url = URL.API_URL;

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // через библиотеку axios;
  useEffect(() => {
    axios.get(`${url}/items`).then((res) => {
      console.log(res.data.items);
    });

    // axios.get(`${url}/items`).then((res) => {
    //   setItems(res.data);
    //   console.log(res.data);
    // });
    // axios.get(`${url}/cart`).then((res) => {
    //   setCartItems(res.data);
    // });
  }, []);

  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((el) => el.id !== id));
    axios.delete(`${url}/cart/${id}`);
  };

  /* // через асинхронную функцию
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${url}/items`
      );
      const data = await res.json();
      setItems(data);
    }
    fetchData();
  }, []); */

  const onAddToCart = (el) => {
    const itemIndexAll = items.find((item) => item.imageUrl === el.imageUrl);
    const isSearchCard = cartItems.some(
      (item) => item.imageUrl === el.imageUrl
    );

    if (el.imageUrl === itemIndexAll.imageUrl && !isSearchCard) {
      axios.post(`${url}/cart`, el);
      setCartItems((prev) => [...prev, el]);
    }
  };

  const onAddToFavorites = (el) => {
    const itemIndexAll = items.find((item) => item.imageUrl === el.imageUrl);
    const isSearchCard = cartItems.some(
      (item) => item.imageUrl === el.imageUrl
    );

    if (el.imageUrl === itemIndexAll.imageUrl && !isSearchCard) {
      axios.post(`${url}/favorites`, el);
      setFavorites((prev) => [...prev, el]);
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
                  // key={item.ind}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onFavorite={() => {
                    onAddToFavorites(item);
                  }}
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
