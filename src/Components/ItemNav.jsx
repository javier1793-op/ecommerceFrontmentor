import '../scss/itemNav.scss'
import Logo from '../img/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import MenuMovil from './MenuMovil';
import { useState } from 'react';

const ItemNav = () => {

  const [movil, setMovil] = useState(false)

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
    {movil &&
    <MenuMovil
        menu={menu}
        setMovil={setMovil}
      />
    }
      
        <div className="contentItem">
        <GiHamburgerMenu 
        className='iconMenu'
        onClick={()=>{setMovil(true)}}
        />

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