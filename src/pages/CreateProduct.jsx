import { collection, getFirestore, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useGetFBCategories } from "../hooks/useProducts";

export const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbail] = useState("");
  const [category, setCategory] = useState("");

  const handleFieldReset = () => {
    setTitle("");
    setDescription("");
    setPrice(0);
    setThumbail("");
    setCategory("");
  };

  const { FBcategories } = useGetFBCategories();

  const handleCreateProduct = () => {
    const data = {
      title,
      description,
      price,
      thumbnail,
      category,
    };

    if (
      title === "" ||
      description === "" ||
      price === "" ||
      thumbnail === "" ||
      category === ""
    ) {
      return alert("Hay datos sin completar. Por favor reintentar");
    }

    const db = getFirestore();

    const productsCollection = collection(db, "finalProducts");

    addDoc(productsCollection, data).then(() => {
      alert("Producto Creado :)");
      handleFieldReset();
    });
  };

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15vh",
        }}
      >
        Crear Producto
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20vh",
        }}
      >
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagen"
          value={thumbnail}
          onChange={(e) => setThumbail(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          {FBcategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleCreateProduct}>Crear Producto</button>
      </div>
    </div>
  );
};
