import axios from "axios";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export const getProductCard = async (): Promise<IProduct[]> => {
  const response = await axios.get<IProduct[]>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
};
