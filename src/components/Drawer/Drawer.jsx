import cn from "classname";
import style from "./Drawer.module.scss";

export const Drawer = (props) => {
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img
            onClick={props.onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className={style.items}>
          <div
            className={cn(style.cartItem, `d-flex`, `align-center`, `mb-20`)}
          >
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className={style.cartItemImg}
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={style.removeBtn}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div
            className={cn(style.cartItem, `d-flex`, `align-center`, `mb-20`)}
          >
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className={style.cartItemImg}
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={style.removeBtn}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div
            className={cn(style.cartItem, `d-flex`, `align-center`, `mb-20`)}
          >
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className={style.cartItemImg}
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={style.removeBtn}
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
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
