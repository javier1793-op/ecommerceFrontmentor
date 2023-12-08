import "../scss/gallery.scss";
import Product1 from "../img/image-product-1.jpg";
import Product2 from "../img/image-product-2.jpg";
import Product3 from "../img/image-product-3.jpg";
import Product4 from "../img/image-product-4.jpg";
import Product1min from "../img/image-product-1-thumbnail.jpg";
import Product2min from "../img/image-product-2-thumbnail.jpg";
import Product3min from "../img/image-product-3-thumbnail.jpg";
import Product4min from "../img/image-product-4-thumbnail.jpg";
import { useState } from "react";

const Gallery = () => {


  const gallery = [
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
  ];

  const [imgPort, setImgPort] = useState(gallery[0].imgBig);


  return (
    <>
      <div className="contentGallery">
        <section className="primaryImg">
          <img
            src={imgPort}
            alt="productoPrimary"
            className="productoPrimary"
          />
        </section>
        <section className="secondaryImg">
          {gallery.map((item) => (
            <img
              src={item.imgSmall}
              alt="productmin"
              className="productMin"
              key={item.id}
              onClick={()=>setImgPort(item.imgBig)}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Gallery;
