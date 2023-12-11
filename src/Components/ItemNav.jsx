import '../scss/itemNav.scss'
import Logo from '../img/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";

const ItemNav = () => {

  const menu=[
    {
      id:1,
      name:'Collections',
    },
    {
      id:2,
      name:'Men',
    },
    {
      id:3,
      name:'Women',
    },
    {
      id:4,
      name:'About',
    },
    {
      id:5,
      name:'Contact',
    },
  ]

  return (
    <>
        <div className="contentItem">
        <GiHamburgerMenu className='iconMenu' />
            <img src={Logo} alt="logotipo" />
            <section className="item">
              {menu.map((item)=>(
                <span key={item.id}>
                  {item.name}
                </span>
              ))}
            </section>
        </div>
    </>
  )
}

export default ItemNav