import { useContext } from "react";
import { Card } from "../Card/Card";
import AppContext from "../../context";

export const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorites,
  isLoading,
}) => {
  const { url } = useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => {
          onAddToFavorites(obj);
        }}
        onPlus={(obj) => {
          onAddToCart(obj);
        }}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>
          {searchValue ? `Поиска по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src={`${url}/img/search.svg`} alt="search" />
          {searchValue && (
            <img
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};
