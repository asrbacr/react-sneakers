import cn from "classname";
import style from "./Drawer.module.scss";
import { useEffect, useState } from "react";

export const Drawer = ({ onClose, onRemove, items = [] }) => {
  const [itemsCard, setItemsCard] = useState(items);

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
              <button className={style.greenButton}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <div
            className={cn(
              style.CartEmpty,
              "d-flex align-center justify-center flex-column flex pl-50 pr-50"
            )}
          >
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="./img/empty-cart.png"
              alt="EmptyCart"
            />
            <h2 className="mb-10">Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button
              className={cn(style.greenButton, "mt-20")}
              onClick={onClose}
            >
              <img src="./img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
