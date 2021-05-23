export const ItemSizes = ({ category, sizes, setSelectedSize }) => {
  return (
    <div className="item-variant">
      {category === "relojes" ? <h4>Diametro en mm:</h4> : <h4>Talles:</h4>}
      <div className="item-variant-selection">
        {sizes.map((size, i = 0) => (
          <label className="item-option" key={i}>
            <input
              type="radio"
              name="size"
              value={size}
              onChange={(e) => setSelectedSize(e.target.value)}
            />
            <span className="item-option-checkmark">{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
