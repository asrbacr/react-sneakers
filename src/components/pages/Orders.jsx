import { useContext, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import axios from "axios";
// import URL from "../../config.json";
import AppContext from "../../context";

// const url2 = URL.API_URL_2;
const url = "http://localhost:3001";

export const Orders = () => {
  const { onAddToFavorites, onAddToCart } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${url}/orders`);
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов!");
        console.log(error);
      }

      // оба варианта делают одно и тоже
      // console.log(data.map((obj) => obj.items).flat());
      // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []));
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои Заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <div key={index}>
            <Card key={index} loading={isLoading} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
