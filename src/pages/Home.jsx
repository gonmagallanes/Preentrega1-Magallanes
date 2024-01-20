import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useGetCollectionDocuments } from "../hooks/useProducts";

export const Home = () => {
  const { productsData } = useGetCollectionDocuments();
  useEffect(() => {
    document.title = " Preentrega2 - Home";
  }, []);
  return <ItemListContainer greeting="hola" productsData={productsData} />;
};
