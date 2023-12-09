import "../scss/listcart.scss";
import ItemList from "./ItemList";

const Listcart = ({ data }) => {
  return (
    <>
      <div className="contentListcart">
        <h2 className="titleList">Cart</h2>
        <section className="list">
          {(!data || data.count === 0) && (
            <span className="cartEmpty">Your cart is empty</span>
          )}

          {data && data.count !== 0 && (
            <>
              <ItemList data={data} />
              <button>Checkout</button>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Listcart;
