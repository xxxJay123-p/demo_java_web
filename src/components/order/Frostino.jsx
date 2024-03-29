import { useEffect } from "react";
import useStore from "../../store";
import Item from "./Item";

function Frostino() {
  //import coffees from store
  const frostino = useStore((store) => store.frostino);
  //import fetchCoffee from store
  const fetchFrostino = useStore((store) => store.fetchFrostino);

  useEffect(() => {
    fetchFrostino();
    console.log("I am fetching frostino..");
  }, [fetchFrostino]);

  console.log("frostino in frostinoPage: ", frostino);

  return (
    <section className="section__style trending-now">
      <main>
        <h2>Frostino</h2>
        <ul className="list__section">
          {frostino.map((frostino) => (
            <Item key={frostino._id} item={frostino} />
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Frostino;
