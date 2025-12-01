import { ProductCard } from "@/shared/ui";
import {useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductCard, IProduct } from "@/shared/api/productCard.api";


export const AboutPage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { data: products, isLoading, error } = useQuery<IProduct[],Error>({
    queryKey: ["products"],
    queryFn: getProductCard,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="container">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            brand={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
          />
        ))
      ) : (
        <div>Продукты не найдены</div>
      )}
    </div>
  );
};

