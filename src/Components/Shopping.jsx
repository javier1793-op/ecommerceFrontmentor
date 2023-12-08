import '../scss/shopping.scss'
import Description from './Description'
import Gallery from './Gallery'
import Product1 from "../img/image-product-1.jpg";
import Product2 from "../img/image-product-2.jpg";
import Product3 from "../img/image-product-3.jpg";
import Product4 from "../img/image-product-4.jpg";
import Product1min from "../img/image-product-1-thumbnail.jpg";
import Product2min from "../img/image-product-2-thumbnail.jpg";
import Product3min from "../img/image-product-3-thumbnail.jpg";
import Product4min from "../img/image-product-4-thumbnail.jpg";

const Shopping = () => {

  const Product={
    company: "sneaker company",
    title: "Fall Limited Edition Sneakers",
    description:
      "these low-profile sneakers are your perfect casual wear companion. Feacturing a durable rubber outer sole, they´ll withstand everything the weather can offer.",
    price: 250.0,
    discount: 0.5,
    count:0,
    gallery:[
      {
        id: 1,
        imgBig: `${Product1}`,
        imgSmall: `${Product1min}`,
      },
      {
        id: 2,
        imgBig: `${Product2}`,
        imgSmall: `${Product2min}`,
      },
      {
        id: 3,
        imgBig: `${Product3}`,
        imgSmall: `${Product3min}`,
      },
      {
        id: 4,
        imgBig: `${Product4}`,
        imgSmall: `${Product4min}`,
      },
    ]
  }
  return (
    <>
        <div className="contentShopping">
            <Gallery 
            gallery={Product.gallery}
            />
            <Description
              Product={Product}
            />
        </div>
    </>
  )
}

export default Shopping