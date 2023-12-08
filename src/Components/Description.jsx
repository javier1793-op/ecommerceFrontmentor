import "../scss/description.scss";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from 'react-redux';

const Description = ({Product}) => {

  const [count, setCount] = useState(0)

  const dispatch = useDispatch();

 

  const add = ()=>{
    setCount(count + 1)
  }

  const subtract = ()=>{
    
    if(count > 0){
      setCount(count - 1)
    }
  }

  const handleProduct = () => {
    let productSend = Product;
    productSend.count= count;
    dispatch({ type: 'SET_DATA', payload: productSend });
  };

  return (
    <>
      <div className="contentDescription">
        <span className="descriptionSpan">{Product.company}</span>
        <h1>{Product.title}</h1>
        <p>{Product.description}</p>
        <section className="priceProducto">
          <div className="Price">
            <h3>$ {(Product.price * Product.discount).toFixed(2)}</h3>
            <span className="percentage">
            {Product.discount * 100} %
            </span>
          </div>
          <div className="discount">
            <h4>${Product.price.toFixed(2)}</h4>
          </div>
        </section>
        <section className="addCart">
          <div className="count">
          <RiSubtractFill 
          className="icon" 
          onClick={subtract}
          />
          {count}
          <IoMdAdd 
          className="icon"
          onClick={add}
          />
          </div>
          <button
          onClick={handleProduct}
          >
          <BsCart3 />
            Add tu cart
          </button>
        </section>
      </div>
    </>
  );
};

export default Description;
