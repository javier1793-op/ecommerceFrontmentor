import "../scss/listcart.scss";
import ItemList from "./ItemList";

const Listcart = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="contentListcart">
        <h2 className="titleList">Cart</h2>
        <section className="list">
          {data.count === 0 ? (
            <span className="cartEmpty">Your cart is empty</span>
          ) : (
            <>
              <ItemList />
              <button>Checkout</button>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Listcart;
