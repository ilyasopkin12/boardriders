import { ProductCard } from "@/shared/ui";
import { useState, useEffect } from "react";
import { getProductCard, IProduct } from "@/shared/api/productCard.api";

const AboutPage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductCard();
        setProducts(data);
      } catch (err) {
        setError("Ошибка при загрузке данных");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
        <div>
        {products.length > 0 && (
            <ProductCard
            brand={products[1].title}
            category={products[1].category}
            price={products[1].price}
            image={products[1].image}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            />
        )}
        </div>
        <div>
        {products.length > 0 && (
        <ProductCard
          brand={products[2].title}
          category={products[2].category}
          price={products[2].price}
          image={products[2].image}
          isFavorited={isFavorited}
          setIsFavorited={setIsFavorited}
        />
      )}
        </div>
    </div>
  );
};

export default AboutPage;
