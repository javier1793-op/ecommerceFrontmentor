import '../scss/description.scss'

const Description = () => {

  const Product =
    {
      company:'sneaker company',
      title:'Fall Limited Edition Sneakers',
      description:'these low-profile sneakers are your perfect casual wear companion. Feacturing a durable rubber outer sole, they´ll withstand everything the weather can offer.',
      price:250.00,
      discount:0.5,
    }
  

  return (
    <>
      <div className="contentDescription">
        <span className="descriptionSpan">
          {Product.company}
        </span>
        <h1>
          {Product.title}
        </h1>
        <p>
          {Product.description}
        </p>
        <section className="priceProducto">
          <div className="Price">
            <h3>$ {(Product.price*Product.discount).toFixed(2)}</h3>
            <h4>${(Product.price).toFixed(2)}</h4>
          </div>
          <div className='discount'>
              {Product.discount*100} %
          </div>
        </section>
      </div>
    </>
  )
}

export default Description