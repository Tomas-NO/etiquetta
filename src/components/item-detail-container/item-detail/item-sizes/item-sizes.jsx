export const ItemSizes = ({ sizes }) => {
  return (
    <div className="item-variant">
      <h4>Talles:</h4>
      <div className="item-variant-selection">
        {sizes.map((size, i = 0) => (
          <label className="item-option" key={i}>
            <input type="radio" name="size" value={size} />
            <span className="item-option-checkmark">{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
