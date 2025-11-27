import { NavLink } from "react-router-dom";
import styles from "./productCard.module.scss";
import favoritedImage from "@/shared/assets/images/isFavorited.svg";
import notFavoritedImage from "@/shared/assets/images/notFavorited.svg";

interface IProductCardProps {
  brand: string;
  price: number;
  image: string;
  category: string;
  isFavorited: boolean;
  setIsFavorited: (isFavorited: boolean) => void;
}

export const ProductCard = ({
  brand,
  price,
  image,
  category,
  isFavorited,
  setIsFavorited,
}: IProductCardProps) => {
  const handleFavorited = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__wrapper}>
        <div className={styles.productCard__image}>
          {isFavorited && (
            <button
              type="button"
              onClick={handleFavorited}
              className={styles.productCard__button}
            >
              <img src={favoritedImage} alt="favorite-image" />
            </button>
          )}
          {!isFavorited && (
            <button
              type="button"
              onClick={handleFavorited}
              className={styles.productCard__button}
            >
              <img src={notFavoritedImage} alt="not-favorite-image" />
            </button>
          )}
          <NavLink to="/productPage">
            <picture>
              <source srcSet={image} type="image/png"></source>
              <img src={image} alt="product-image" />
            </picture>
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
