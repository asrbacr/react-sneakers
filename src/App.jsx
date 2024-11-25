import "./App.scss";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <div className="card d-flex flex-column">
            <div className="favorite">
              <img
                width={32}
                height={32}
                src="/img/heart-unliked.svg"
                alt="unliked"
              />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img
                  height={32}
                  width={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img height={32} width={32} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img height={32} width={32} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card d-flex flex-column">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img height={32} width={32} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
