import '../scss/nav.scss'
import ItemNav from './ItemNav'
import Cart from './Cart'

const Nav = () => {
  return (
    <>
        <div className="contentNav">
           <ItemNav/>
           <Cart/>
        </div>
    </>
  )
}

export default Nav