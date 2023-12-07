import '../scss/cart.scss'
import { BsCart3 } from "react-icons/bs";
import Avatar from '../img/image-avatar.png'

const Cart = () => {
  return (
   <>
    <div className="contentCart">
        <section className="cart">
          <span className="countCart">
            3
          </span>
          <BsCart3 />
        </section>
        <img src={Avatar} alt="avatar" className='avatarImg'/>
    </div>
   </>
  )
}

export default Cart