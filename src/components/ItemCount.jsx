import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

const ItemCount = () => {
  const [countItem, setCountItem] = useState(1);

  const { count, setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
    setCountItem(countItem - 1);
  };
  if (countItem < 0) {
    setCountItem(countItem + 1);
  }

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px ",
          margin: "auto",
        }}
      >
        <Button
          style={{ backgroundColor: "red", border: "red" }}
          onClick={handleRemove}
        >
          -
        </Button>
        <span>{countItem}</span>
        <Button
          style={{ backgroundColor: "red", border: "red" }}
          onClick={handleAdd}
        >
          +
        </Button>
      </div>

      <Button
        style={{
          backgroundColor: "red",
          border: "red",
          display: "flex",
          marginLeft: "50px",
          marginTop: "20px   ",
        }}
        onClick={() => {
          setCount(countItem + count);
          setCountItem(1);
        }}
      >
        <h6>Agregar al carrito</h6>
      </Button>
    </div>
  );
};

export default ItemCount;
