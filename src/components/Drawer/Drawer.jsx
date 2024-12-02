import cn from "classname";
import style from "./Drawer.module.scss";
import { useEffect, useState } from "react";

export const Drawer = ({ onClose, items = [] }) => {
  const [itemsCard, setItemsCard] = useState(items);

  const deleteItem = (el) => {
    setItemsCard(itemsCard.filter((item) => item.id !== el.id));
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

        <div className={style.items} id={items.id}>
          {itemsCard.map((elem) => (
            <div
              className={cn(style.cartItem, "d-flex", "align-center", "mb-20")}
            >
              <div
                style={{ backgroundImage: `url(${elem.imageUrl})` }}
                className={style.cartItemImg}
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">{elem.title}</p>
                <b>{elem.price} руб.</b>
              </div>
              <img
                className={style.removeBtn}
                src="/img/btn-remove.svg"
                alt="Remove"
                onClick={() => deleteItem(elem)}
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
          <button className={style.greenButton}>
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
