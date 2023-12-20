import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

export const Home = () => {
  const { productsData } = useGetProducts();
  useEffect ( () => {
    document.title = " Home"
  })
  return <ItemListContainer productsData={productsData} />;
};