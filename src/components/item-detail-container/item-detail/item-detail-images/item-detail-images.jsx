import "./item-detail-images.scss";

export const ItemDetailImages = ({ images }) => {
  function change_image(evt) {
    let id = evt.target.id;
    document.getElementById("selected-image").setAttribute("src", images[id]);
  }

  return (
    <div className="item-detail-images">
      <div className="item-detail-images-selection">
        {images.map((image, i = 0) => (
          <img
            src={image}
            alt="item-img"
            className="image-option"
            id={i}
            key={i}
            onClick={change_image}
          />
        ))}
      </div>

      <div className="item-detail-selected-image">
        <img id="selected-image" src={images[0]} alt="item-img" />
      </div>
    </div>
  );
};
