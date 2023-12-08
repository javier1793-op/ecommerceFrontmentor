import "../scss/gallery.scss";

import { useState } from "react";

const Gallery = ({ gallery }) => {
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
              onClick={() => setImgPort(item.imgBig)}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Gallery;
