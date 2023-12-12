import '../scss/galleryMovil.scss'
import { useState } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

const GalleryMovil = ({gallery}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [imgPrimari, setImgPrimari] = useState(gallery[0].imgBig);
  
    
  
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
  return (
    <>
        <div className="contentGalleryMovil">
        <section className="primaryMovil">
         
         
            <LuChevronLeft className="iconArrowMovil leftMovil" onClick={handlePrev} />
            <img src={imgPrimari} alt="imgPrimaryMovil" className="imgPrimayMovil" />
            <LuChevronRight className="iconArrowMovil rightMovil" onClick={handleNext} />
        
        </section>
        </div>
    </>
  )
}

export default GalleryMovil