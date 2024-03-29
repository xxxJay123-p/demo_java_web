import React, { useEffect } from "react";
import useStore from "../../store";
import Aos from "aos";
import "aos/dist/aos.css";

const placeholder = "../public/assets/costa-coffee-logo.svg";

function Item({ item, key }) {
  const addItemBasket = useStore((store) => store.addItemBasket);
  const removeItemBasket = useStore((store) => store.removeItemBasket);
  const basketItems = useStore((store) => store.basketItems);

  const exist = basketItems.find((basketItem) => basketItem._id === item._id);

  const name = item.name;

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <li key={item._id}>
      <img
        className="image"
        src={item.imageUrl ? item.imageUrl : placeholder}
        alt={item.name}
      />
      <span className="center">
        <h3 className="space-down">{name.toUpperCase()}</h3>£
        {item.price.toFixed(2)}
      </span>
      <p className="center">{item.description}</p>
      <div className="inline">
        <div className="space"></div>
        <button
          className="quantity-btn center remove-btn"
          onClick={() => (exist ? removeItemBasket(item) : null)}
        >
          -
        </button>
        <p>{exist ? exist.qnt : 0}</p>
        <button
          className="quantity-btn center add-btn"
          onClick={() => addItemBasket(item)}
        >
          +
        </button>
        <div className="space"></div>
      </div>
    </li>
  );
}

export default Item;
