import cn from "classname";
// Нужно перенести стили из Drawer в Info
// import style from "./Info.module.scss";
import style from "../Drawer/Drawer.module.scss";

import React, { useContext } from "react";
import AppContext from "../../context";

const Info = ({ title, image, description }) => {
  const { setCartOpened, url } = useContext(AppContext);

  return (
    <div
      className={cn(
        style.CartEmpty,
        "d-flex align-center justify-center flex-column flex pl-50 pr-50"
      )}
    >
      <img
        className="mb-20"
        width="120px"
        // height="120px"
        src={image}
        alt="EmptyCart"
      />
      <h2 className="mb-10">{title}</h2>
      <p className="opacity-6">{description}</p>
      <button
        className={cn(style.greenButton, "mt-20")}
        onClick={() => setCartOpened(false)}
      >
        <img src={`${url}/img/arrow.svg`} alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
