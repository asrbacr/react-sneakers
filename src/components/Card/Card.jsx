import cn from "classname";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import { useContext, useState } from "react";
import AppContext from "../../context";

export const Card = ({
  id,
  parentId,
  imageUrl,
  title,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
}) => {
  const { isItemAdded, onAddToFavorites } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const obj = { id, parentId: id, imageUrl, title, price };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite(obj);
  };

  const onClickPlus = () => {
    onPlus(obj);
  };

  return (
    <div
      className={cn(styles.card, "d-flex", "flex-column", "mb-30")}
      // key={ind}
    >
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={205}
          viewBox="0 0 210 205"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="151" height="103" />
          <rect x="0" y="180" rx="8" ry="8" width="80" height="15" />
          <rect x="119" y="165" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="118" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="137" rx="3" ry="3" width="100" height="15" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                width={32}
                height={32}
                src={
                  isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
                }
                alt="unliked"
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <p>Цена:</p>
              <b>{price.toFixed(2)} руб</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                src={
                  isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"
                }
                alt="plus"
                onClick={onClickPlus}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
