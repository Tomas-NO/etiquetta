export const ItemColors = ({ colors, colorsList, setSelectedColor }) => {
  return (
    <div className="item-variant">
      <h4>Colores:</h4>
      <div className="item-variant-selection">
        {colors.map((color, key) => (
          <label className="item-option" id="item-option" key={key}>
            <input
              type="radio"
              name="color"
              value={color}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            <span
              className="item-option-checkmark"
              style={{
                backgroundColor: colorsList.filter(
                  (listColor) => listColor.id === color
                )[0].codigo,
              }}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
};
