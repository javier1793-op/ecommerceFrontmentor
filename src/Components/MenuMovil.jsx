import '../scss/menuMovil.scss'
import { MdClose } from "react-icons/md";

const MenuMovil = ({menu, setMovil}) => {
  return (
    <>
        <div className="contentMenuMovil">
            <section className="NavMovil">
            <MdClose
                className='CloseMovil'
                onClick={()=>{setMovil(false)}}
          />
          {menu.map((item)=>(
                <span key={item.id} className='navItemMovil'>
                  {item.name}
                </span>
              ))}
            </section>
        </div>
    </>
  )
}

export default MenuMovil