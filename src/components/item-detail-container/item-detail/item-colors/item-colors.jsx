export const ItemColors = ({ colors, colorsList, setSelectedColor }) => {
  return (
    <div className="item-variant">
      <h4>Colores:</h4>
      <div className="item-variant-selection">
        {colors.map((color, i = 0) => (
          <label className="item-option" id="item-option" key={i}>
            <input
              type="radio"
              name="color"
              value={color}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <span
              className="item-option-checkmark"
              style={{
                backgroundColor: colorsList[color],
              }}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
};
