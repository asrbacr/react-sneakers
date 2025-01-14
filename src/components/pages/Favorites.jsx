import { Card } from "../Card/Card";

export const Favorites = ({ items, onAddToFavorites, onAddToCart }) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <>
            <Card
              key={index}
              favorited={true}
              onFavorite={() => {
                onAddToFavorites(item);
              }}
              onPlus={() => {
                onAddToCart(item);
              }}
              {...item}
            />
          </>
        ))}
      </div>
    </div>
  );
};
