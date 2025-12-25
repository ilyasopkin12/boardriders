import axios from "axios";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const getProductCard = async (): Promise<IProduct[]> => {
  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await api.get<IProduct[]>("/products");
  return response.data;
};
