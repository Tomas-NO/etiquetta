import "./item-detail-images.scss";

export const ItemDetailImages = ({ images }) => {
  return (
    <div className="item-detail-images">
      <div className="item-detail-images-selection">
        {images.map((image, i = 0) => (
          <img src={image} alt="item-img" key={i} />
        ))}
      </div>

      <div className="item-detail-selected-image">
        <img src={images[0]} />
      </div>
    </div>
  );
};
