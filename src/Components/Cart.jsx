import "../scss/cart.scss";
import { BsCart3 } from "react-icons/bs";
import Avatar from "../img/image-avatar.png";
import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.data);
  
  return (
    <>
      <div className="contentCart">
        <section className="cart">
          {data.count === 0 ? (
            ""
          ) : (
            <span className="countCart">{data.count}</span>
          )}

          <BsCart3 />
        </section>
        <img src={Avatar} alt="avatar" className="avatarImg" />
      </div>
    </>
  );
};

export default Cart;
