import "./cart-resume.scss";

export const CartResume = ({
  setName,
  setPhone,
  setEmail,
  total,
  buyItems,
}) => {
  return (
    <form className="cart-resume">
      <h3 className="cart-resume-title">Resumen de compra</h3>
      <input
        className="cart-resume-input"
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="cart-resume-input"
        type="tel"
        placeholder="Teléfono"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        className="cart-resume-input"
        type="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="cart-resume-total">
        <label htmlFor="total">Total</label>
        <input
          className="cart-resume-total-number"
          type="number"
          value={total}
          placeholder={`$${total}`}
          disabled
        />
      </div>
      <button className="cart-resume-buy" onClick={buyItems} type="submit">
        Comprar
      </button>
    </form>
  );
};
