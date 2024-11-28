import cn from "classname";
import styles from "./Card.module.scss";
import { useState } from "react";

export const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClicked = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={cn(styles.card, `d-flex`, `flex-column`, `mb-20`)}>
      <div className={styles.favorite} onClick={props.onClickFavorite}>
        <img
          width={32}
          height={32}
          src="/img/heart-unliked.svg"
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{props.price} руб</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
          onClick={handleClicked}
        />
      </div>
    </div>
  );
};
