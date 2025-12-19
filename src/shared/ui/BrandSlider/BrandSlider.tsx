import styles from "./BrandSlider.module.scss";


interface IBrandSliderProps {
  brands: {
    name: string;
    image: string;
  }[];
}

export const BrandSlider = ({ brands }: IBrandSliderProps) => {
  return (
    <div className={styles.brandsSlider} aria-label="Логотипы брендов">
      <div className={styles.brandsSliderItem}>
        {brands.map((brand, index) => (
          <img key={index} src={brand.image} alt={brand.name} />
        ))}
      </div>
    </div>
  );
};
