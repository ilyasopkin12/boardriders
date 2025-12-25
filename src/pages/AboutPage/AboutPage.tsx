import { ProductCard } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { getProductCard, IProduct } from "@/shared/api/productCard.api";
import styles from "./AboutPage.module.scss";
export const AboutPage = () => {
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
    <div className={styles.aboutPage}>
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            brand={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
          />
        ))
      ) : (
        <div>Продукты не найдены</div>
      )}
    </div>
  );
};

