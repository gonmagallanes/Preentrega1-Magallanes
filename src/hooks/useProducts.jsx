import React, { useEffect, useState } from "react";
import { getProducts } from "../services/producteService";

export const useGetProducts = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return productsData;
};
