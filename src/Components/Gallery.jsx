import "../scss/gallery.scss";

import { useState } from "react";
import Modalgallery from "./Modalgallery";

const Gallery = ({ gallery }) => {
  const [imgPort, setImgPort] = useState(gallery[0].imgBig);

  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleImageClick = (item, index) => {
    setImgPort(item.imgBig);
    setActiveIndex(index);
  };

  return (
    <>
      {openModal && <Modalgallery
      gallery= {gallery}
      imgPort={imgPort}
      setOpenModal={setOpenModal}
      />}
      <div className="contentGallery">
        <section className="primaryImg">
          <img
            src={imgPort}
            alt="productoPrimary"
            className="productoPrimary"
            onClick={()=>{setOpenModal(true)}}
          />
        </section>
        <section className="secondaryImg">
          {gallery.map((item, index) => (
            <img
              src={item.imgSmall}
              alt="productmin"
              key={item.id}
              className={`productMin ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleImageClick(item, index)}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Gallery;
