import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { count } = useContext(CartContext);

  return (
    <div style={{ display: "flex", height: "40px", alignItems: "center" }}>
      🛒
      <span style={{ fontFamily: "arial", fontSize: "1.5rem" }}>{count}</span>
    </div>
  );
};

export default CartWidget;
