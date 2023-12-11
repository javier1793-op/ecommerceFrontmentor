import { createPortal } from "react-dom";
import "../scss/modalgallery.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

const Modalgallery = ({ gallery, setOpenModal, imgPort }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgPrimari, setImgPrimari] = useState(imgPort);

  const handleImageClick = (item, index) => {
    setImgPrimari(item.imgBig);
    setActiveIndex(index);
  };

  const handlePrev=()=>{
    const newIndex = (activeIndex - 1 + gallery.length) % gallery.length;
    setImgPrimari(gallery[newIndex].imgBig);
    setActiveIndex(newIndex);
  }

  const handleNext=()=>{
    const newIndex = (activeIndex + 1) % gallery.length;
    setImgPrimari(gallery[newIndex].imgBig);
    setActiveIndex(newIndex);
  }

  return createPortal(
    <>
      <div className="contentModalgallery">
        <section className="primaryModal">
          <MdClose
            className="iconCloseModal"
            onClick={() => {
              setOpenModal(false);
            }}
          />
          <div className="contentPrimary">
            <LuChevronLeft className="iconArrow left" onClick={handlePrev} />
            <img src={imgPrimari} alt="imgPrimary" className="imgPrimayModal" />
            <LuChevronRight className="iconArrow right" onClick={handleNext} />
          </div>
        </section>
        <section className="sedundaryModal">
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
    </>,
    document.getElementById("portal")
  );
};

export default Modalgallery;
