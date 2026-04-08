import React from "react";

function ProdcutImages({ product, mainImage, setMainImage }) {
  return (
    <div>
      {" "}
      <div className="img_item">
        <div className="big_item">
          <img id="big_item" src={mainImage} alt={product?.title} />
        </div>
        <div className="small_item">
          {product?.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product?.title}
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProdcutImages;
