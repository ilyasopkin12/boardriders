import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "./HomePage.module.scss";
import { CustomSwiper } from "@/shared/ui/Swiper";
import { ProductCard } from "@/shared/ui/productCard";
import { getProductCard, IProduct } from "@/shared/api/productCard.api";
import sliderImage1 from "@/shared/assets/images/sliderImage1.png";
import sliderImage2 from "@/shared/assets/images/sliderImage2.png";
import sliderImage3 from "@/shared/assets/images/sliderImage3.png";
import heartImage from "@shared/assets/images/brandImage1.png";
import treeImage from "@shared/assets/images/brandImage2.png";
import dcImage from "@shared/assets/images/brandImage3.png";
import quicksilverImage from "@shared/assets/images/brandImage4.png";
import billabongImage from "@shared/assets/images/brandImage5.png";
import boardridersImage from "@shared/assets/images/brandImage6.png";
import libTecImage from "@shared/assets/images/brandImage7.png";
import vaImage from "@shared/assets/images/brandImage8.png";
import gnuImage from "@shared/assets/images/brandImage9.png";
import skullcandyImage from "@shared/assets/images/brandImage10.png";
import promoImage1 from "@shared/assets/images/promoImage1.png";
import promoImage2 from "@shared/assets/images/promoImage2.png";
export const HomePage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { data: products } = useQuery<IProduct[], Error>({
    queryKey: ["products"],
    queryFn: getProductCard,
  });
  const titles = ["WINTER SALE ДО -70%", "LIB TECH", "Boardriders"];
  const brands = [
    {
      name: "heart",
      image: heartImage,
    },
    {
      name: "tree",
      image: treeImage,
    },
    {
      name: "DC",
      image: dcImage,
    },
    {
      name: "Quicksilver",
      image: quicksilverImage,
    },
    {
      name: "Billabong",
      image: billabongImage,
    },
    {
      name: "boardriders",
      image: boardridersImage,
    },
    {
      name: "libTech",
      image: libTecImage,
    },
    {
      name: "VA",
      image: vaImage,
    },
    {
      name: "GNU",
      image: gnuImage,
    },
    {
      name: "Skullcandy",
      image: skullcandyImage,
    },
  ];

  return (
    <div className={styles.homePage}>
      <section className={styles.slider}>
        <div className={styles.sliderContainer}>
          <CustomSwiper
            images={[sliderImage1, sliderImage2, sliderImage3]}
            slidesPerView={1.5}
            spaceBetween="25px"
            centeredSlides={true}
            centeredSlidesBound={true}
            loop={true}
            style={{
              maxWidth: "1905px",
              margin: "0 auto",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
            navigation={true}
            title={titles}
          />
        </div>
        <div className={styles.brandsSlider} aria-label="Логотипы брендов">
          <div className={styles.brandsSliderItem}>
            {brands.map((brand, index) => (
              <img key={index} src={brand.image} alt={brand.name} />
            ))}
          </div>
        </div>
        <div className={styles.promoSlider}>
          <div className={styles.promoSliderItem}>
            <div className={styles.promoSliderItemImage}>
              <img src={promoImage1} alt="action-image" />
            </div>
            <div className={styles.promoSliderItemTitle}>
              <h2 className={styles.promoSliderItemTitleText}>
                НАЗВАНИЕ АКЦИИ №1
              </h2>
            </div>
          </div>
          <div className={styles.promoSliderItem}>
            <div className={styles.promoSliderItemImage}>
              <img src={promoImage2} alt="action-image" />
            </div>
            <div className={styles.promoSliderItemTitle}>
              <h2 className={styles.promoSliderItemTitleText}>
                НАЗВАНИЕ АКЦИИ №2
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.products}>
        <div className={styles.productsTitleWrapper}>
          <p className={styles.productsTitleText}>Новинки</p>
        </div>
        <div className={styles.productsSlider}>
          <CustomSwiper
            slidesPerView={4}
            spaceBetween="25px"
            centeredSlides={true}
            centeredSlidesBound={true}
            loop={true}
            style={{
              maxWidth: "1680px",
              margin: "0 auto",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            {products?.map((product: IProduct) => (
              <ProductCard
                key={product.id}
                brand={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
                isFavorited={isFavorited}
                setIsFavorited={setIsFavorited}
              />
            ))}
          </CustomSwiper>
        </div>
      </section>
    </div>
  );
};
