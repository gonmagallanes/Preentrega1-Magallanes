import axios from "axios";

export async function getProductByCategory() {
  return await axios.get(`https://dummyjson.com/products/categories`);
}

export async function getCategoryProducts(id) {
  return await axios.get(`https://dummyjson.com/products/category/${id}`);
}
