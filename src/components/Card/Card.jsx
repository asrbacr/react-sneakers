export const Card = (props) => {

  // console.log(props);

  return (
    <div className="card d-flex flex-column mb-20">
      <div className="favorite">
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
        <button className="button" onClick={props.onClick}>
          <img height={32} width={32} src="/img/btn-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};
