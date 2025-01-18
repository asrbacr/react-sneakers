import cn from "classname";
import style from "./Drawer.module.scss";
import { useContext, useState } from "react";
import Info from "../Info/Info";
import AppContext from "../../context";

export const Drawer = ({ onClose, onRemove, items = [] }) => {
  const { setCartItems } = useContext(AppContext);
  const [isOrderCompete, setIsOrderCompete] = useState(false);

  const onClickOrder = () => {
    setIsOrderCompete(true);
    setCartItems([]);
  };

  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className={style.items}>
              {items.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    style.cartItem,
                    "d-flex",
                    "align-center",
                    "mb-20"
                  )}
                >
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className={style.cartItemImg}
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <img
                    className={style.removeBtn}
                    src="/img/btn-remove.svg"
                    alt="Remove"
                    onClick={() => onRemove(item.id)}
                  />
                </div>
              ))}
            </div>
            <div className={style.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button onClick={onClickOrder} className={style.greenButton}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderCompete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderCompete
                ? "Ваш заказ #18 скоро будет передан курьерской доставке"
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderCompete
                ? "./img/complete-order.png"
                : "./img/empty-cart.png"
            }
          />
        )}
      </div>
    </div>
  );
};
