import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

export const Home = () => {
  const { productsData } = useGetProducts();
  useEffect(() => {
    document.title = " Preentrega2 - Home";
  }, []);
  return <ItemListContainer greeting="hola" productsData={productsData} />;
};
