import React from "react";
import { useParams } from "react-router-dom";

import ItemListContainer from "../components/ItemListContainer";
import {
  useGetCategoryProducts,
} from "../hooks/useProducts";

export const Category = () => {
  const { id } = useParams();
  const { productsData } = useGetCategoryProducts(id);
  return <ItemListContainer productsData={productsData}/>;
};
