import "./cart-resume.scss";

export const CartResume = ({ total }) => {
  return (
    <div className="cart-resume">
      <h3 className="cart-resume-title">Resumen de compra</h3>
      <div className="cart-resume-total">
        <p>Total</p>
        <p>${total}</p>
      </div>
      <button className="cart-resume-buy">Iniciar Compra</button>
    </div>
  );
};
