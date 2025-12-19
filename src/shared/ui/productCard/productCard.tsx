import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./productCard.module.scss";
import favoritedImage from "@/shared/assets/images/isFavorited.svg";
import notFavoritedImage from "@/shared/assets/images/notFavorited.svg";

interface IProductCardProps {
  brand: string;
  price: number;
  image: string;
  category: string;
  id: number;
  initialFavorited?: boolean;
}

export const ProductCard = ({
  brand,
  price,
  image,
  category,
  id,
  initialFavorited = false,
}: IProductCardProps) => {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  
  const handleFavorited = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__wrapper}>
        <div className={styles.productCard__image}>
            <button
              type="button"
              onClick={handleFavorited}
              className={styles.productCard__button}
            >
              <img src={isFavorited ? favoritedImage : notFavoritedImage} alt="favorite-image" />
            </button>
          <NavLink to={`/product/${id}`}>
            <img src={image} alt="product-image" />
          </NavLink>
        </div>
        <div className={styles.productCard__text}>
          <p className={styles.productCard__brand}>{brand}</p>
          <p className={styles.productCard__description}>{category}</p>
          <p className={styles.productCard__price}> {price} ₽</p>
        </div>
      </div>
    </div>
  );
};
