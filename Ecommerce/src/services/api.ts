import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const getProducts = async () => {
  try {
    const data = await api.get("products");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getProductById = async (productId: string) => {
  try {
    const data = await api.get(`products/${productId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
