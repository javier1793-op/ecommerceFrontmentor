import { RiDeleteBin5Fill } from "react-icons/ri";
import '../scss/itemList.scss'
import { useState } from "react";
import { useDispatch } from 'react-redux';

const ItemList = ({data}) => {

  const [itemProducto, setItemProducto] = useState(data)

  const dispatch = useDispatch();

  const handleDelete=()=>{
    let productSend = { ...data };
    productSend.count = 0;
      dispatch({ type: 'SET_DATA', payload: productSend });
  }
  return (
    <>
      <div className="contentItemList">
        <img src={itemProducto.gallery[0].imgSmall} alt="imgSmall" className="imgItem" />
        <section className="descriptionItem">
          <h4 className="nameProduct">
            {itemProducto.title}
          </h4>
          <p className="priceItem">
            $ {(itemProducto.price * itemProducto.discount).toFixed(2)} 
            {'   '}x{'   '}
            {itemProducto.count}
            {'   '}
               <p className="totalItem">
           ${((itemProducto.price * itemProducto.discount)*itemProducto.count).toFixed(2)}
          </p>
          </p>
       
        </section>
          <RiDeleteBin5Fill 
          className="iconDelete"
          onClick={handleDelete}
          />
      </div>
    </>
  )
}

export default ItemList