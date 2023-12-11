import { createPortal } from "react-dom";
import "../scss/modalgallery.scss";
import { MdClose } from "react-icons/md";

const Modalgallery = ({ gallery, setOpenModal, imgPort }) => {
  return createPortal(
    <>
      <div className="contentModalgallery">
        <section className="primaryModal">
           <MdClose className="iconCloseModal"
           onClick={()=>{setOpenModal(false)}}
           />
        <img src={imgPort} alt="imgPrimary" className="imgPrimayModal" /> 
        </section>
        
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modalgallery;
