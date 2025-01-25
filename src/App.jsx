import "./App.scss";
import { Route, Routes } from "react-router";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "./config.json";
import { Home } from "./components/pages/Home";
import { Favorites } from "./components/pages/Favorites";
import AppContext from "./context";
import { useCart } from "./hooks/useCart";
import { Orders } from "./components/pages/Orders";

const url = URL.API_URL;
const url2 = URL.API_URL_2;

// data не работает
const data = [
  {
    items: [
      {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        imageUrl: "/img/sneakers/1.jpg",
      },
      {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 12999,
        imageUrl: "/img/sneakers/2.jpg",
      },
      {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 8499,
        imageUrl: "/img/sneakers/3.jpg",
      },
      {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: 8999,
        imageUrl: "/img/sneakers/4.jpg",
      },
      {
        title: "Мужские Кроссовки Under Armour Curry 8",
        price: 15199,
        imageUrl: "/img/sneakers/5.jpg",
      },
      {
        title: "Мужские Кроссовки Nike Kyrie 7",
        price: 11299,
        imageUrl: "/img/sneakers/6.jpg",
      },
      {
        title: "Мужские Кроссовки Jordan Air Jordan 11",
        price: 10799,
        imageUrl: "/img/sneakers/7.jpg",
      },
      {
        title: "Мужские Кроссовки Nike LeBron XVIII",
        price: 16499,
        imageUrl: "/img/sneakers/8.jpg",
      },
      {
        title: "Мужские Кроссовки Nike Lebron XVIII Low",
        price: 13999,
        imageUrl: "/img/sneakers/9.jpg",
      },
      {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 16499,
        imageUrl: "/img/sneakers/10.jpg",
      },
      {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: 8999,
        imageUrl: "/img/sneakers/11.jpg",
      },
      {
        title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        price: 11299,
        imageUrl: "/img/sneakers/12.jpg",
      },
    ],
  },
  {
    cart: [
      {
        id: "1",
        title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        imageUrl: "/img/sneakers/12.jpg",
      },
    ],
  },
  {
    favorites: [],
  },
];

console.log(AppContext);

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // const { cartItems, setCartItems } = useCart([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // через библиотеку axios;
  useEffect(() => {
    // axios.get(`${url}/`).then((res) => {
    //   setItems(res.data);
    // });

    async function fetchData() {
      // если ф-ция выполняется больше 1-ого раза, то лучше выставлять состояние загрузки.
      // setIsLoading(true);
      const cartResponse = await axios.get(`${url}/cart`);
      const favoritesResponse = await axios.get(`${url2}/favorites`);
      const itemsResponse = await axios.get(`${url}/sneakers`);

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
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
    try {
      if (cartItems.find((obj) => Number(obj.id) === Number(el.id))) {
        axios.delete(`${url}/cart/${el.id}`);
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(el.id))
        );
      } else {
        axios.post(`${url}/cart`, el);
        setCartItems((prev) => [...prev, el]);
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
    }
    // const itemIndexAll = items.find((item) => item.imageUrl === el.imageUrl);
    // const isSearchCard = cartItems.some(
    //   (item) => item.imageUrl === el.imageUrl
    // );

    // if (el.imageUrl === itemIndexAll.imageUrl && !isSearchCard) {
    //   axios.post(`${url}/cart`, el);
    //   setCartItems((prev) => [...prev, el]);
    // }
  };

  const onAddToFavorites = async (el) => {
    try {
      if (favorites.find((obj) => Number(obj.id) === Number(el.id))) {
        axios.delete(`${url2}/favorites/${el.id}`);
        setFavorites((prev) =>
          prev.filter((obj) => Number(obj.id) !== Number(el.id))
        );
      } else {
        const { data } = await axios.post(`${url2}/favorites`, el);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }

    // const itemIndexAll = items.find((item) => item.imageUrl === el.imageUrl);
    // const isSearchCard = cartItems.some(
    //   (item) => item.imageUrl === el.imageUrl
    // );

    // if (el.imageUrl === itemIndexAll.imageUrl && !isSearchCard) {
    //   console.log(el);
    //   if (favorites.find((obj) => obj.id === el.id)) {
    //     axios.delete(`${url2}/favorites/${el.id}`);
    //     setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    //   } else {
    //     axios.post(`${url2}/favorites`, el);
    //     setFavorites((prev) => [...prev, el]);
    //   }
    // }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorites,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          {/* Свойство exact обозначает строгое значение ссылки */}
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorites={onAddToFavorites}
                isLoading={isLoading}
              />
            }
            exact
          ></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
