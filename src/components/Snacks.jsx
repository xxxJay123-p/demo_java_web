import { useEffect } from "react";
import useStore from "../store";
import Item from "./Item";

function Snacks() {
  //import coffees from store
  const snacks = useStore((store) => store.snacks);
  //import fetchCoffee from store
  const fetchSnacks = useStore((store) => store.fetchSnacks);

  useEffect(() => {
    fetchSnacks();
    console.log("I am fetching snacks..");
  }, [fetchSnacks]);

  console.log("snacks in snacksPage: ", snacks);

  return (
    <section className="section__style trending-now">
      <h2> Snacks </h2>

      <small> Coming soon.. </small>
      <ul className="list__section">
        {snacks.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default Snacks;
