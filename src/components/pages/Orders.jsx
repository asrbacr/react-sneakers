import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import axios from "axios";
import URL from "../../config.json";

const url2 = URL.API_URL_2;

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${url2}/orders`);

      // оба варианта делают одно и тоже
      // console.log(data.map((obj) => obj.items).flat());
      // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои Заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {orders.map((item, index) => (
          <>
            <Card
              key={index}
              onFavorite={(obj) => {
                onAddToFavorites(obj);
              }}
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
              // loading={isLoading}
              {...item}
            />
          </>
        ))}
      </div>
    </div>
  );
};
