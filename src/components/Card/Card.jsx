import cn from "classname";
import styles from "./Card.module.scss";
import { useState } from "react";

export const Card = ({
  id,
  imageUrl,
  title,
  price,
  onPlus,
  onClickFavorite,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClicked = () => {
    setIsAdded(!isAdded);
  };

  const onClickPlus = () => {
    handleClicked();
    onPlus({ imageUrl, title, price, id });
  };

  return (
    <div className={cn(styles.card, "d-flex", "flex-column", "mb-30")} key={id}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          width={32}
          height={32}
          src="/img/heart-unliked.svg"
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{price} руб</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
};
