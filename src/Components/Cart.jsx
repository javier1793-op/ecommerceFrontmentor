import "../scss/cart.scss";
import { BsCart3 } from "react-icons/bs";
import Avatar from "../img/image-avatar.png";
import { useSelector } from "react-redux";
import Listcart from "./Listcart";
import { useState } from "react";

const Cart = () => {
  const data = useSelector((state) => state.data);

  const [view, setView] = useState(false)
  
  return (
    <>
      <div className="contentCart">
        <section className="cart">
          {data.count === 0 ? (
            ""
          ) : (
            <span className="countCart">{data.count}</span>
          )}

          <BsCart3 className="iconCart"  onClick={()=>{setView(!view)}}/>
            {view &&
          <Listcart data={data}/>
            }
        </section>
        <img src={Avatar} alt="avatar" className="avatarImg" />
      </div>
    </>
  );
};

export default Cart;
