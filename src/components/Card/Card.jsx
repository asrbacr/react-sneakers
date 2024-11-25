export const Card = () => {
  return (
    <div className="card d-flex flex-column">
      <div className="favorite">
        <img
          width={32}
          height={32}
          src="/img/heart-unliked.svg"
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>12 999 руб</b>
        </div>
        <button className="button">
          <img height={32} width={32} src="/img/btn-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};
