import React, { useEffect, useState } from "react";
import { getCategoryProducts, getProductByCategory, getProductById, getProducts } from "../services/producteService";

export const useGetProducts = () => {
  const [productsData, setProductsData] = useState([]);

  
  useEffect(() => {
    setTimeout(() => {
      getProducts(3)
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
    }, 2000)
    
  }, []);
  return {productsData};
};

export const useGetProductById = (id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return {productData};
};

export const useGetCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProductByCategory()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return {categories};
};

export const useGetCategoryProducts = (id) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getCategoryProducts(id)
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return {productsData};
};