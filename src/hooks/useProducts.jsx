import { useEffect, useState } from "react";
import {
  getCategoryProducts,
  getProductByCategory,
} from "../services/producteService";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";



export const useGetCollectionDocuments = (collectionName = "finalProducts") => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return {
    productsData,
  };
};

export const useGetProductById = (collectionName = "finalProducts", id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, collectionName, id);

    getDoc(docRef).then((doc) => {
      setProductData({ id: doc.id, ...doc.data() });
    });
  }, [id]);

  return { productData };
};

export const useGetFBCategories = (collectionName = 'categories') => {
  const [FBcategories, setFBCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      const categories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFBCategories(categories[0].categories);
    });
  }, []);
  return { FBcategories };
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
  return { categories };
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
  return { productsData };
};
