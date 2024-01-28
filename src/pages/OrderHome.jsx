import Coffee from "../components/order/Coffee";
import Drinks from "../components/order/Drinks";
import Food from "../components/order/Food";
import Frostino from "../components/order/Frostino";
import Pastries from "../components/order/Pastries";
import Snacks from "../components/order/Snacks";

function OrderHome() {
  return (
    <>
      <main className="">
        <Coffee />
        <Frostino />
        <Food />
        <Pastries />
        {/* <Drinks />
        <Snacks /> */}
        {/* <a class="back-to-top-link" href="#top-of-the-page">
					Back to top
				</a> */}
      </main>
      {/* <Basket className="" /> */}
    </>
  );
}

export default OrderHome;
