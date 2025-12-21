
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";
import {
  PromoSlider,
  BrandSlider,
  ProductCard,
  CustomSwiper,
  Button,
  Flex,
  BlogSlider,
} from "@/shared/ui";
import { getProductCard, IProduct } from "@/shared/api/productCard.api";
import sliderImage1 from "@/shared/assets/images/sliderImage1.png";
import sliderImage2 from "@/shared/assets/images/sliderImage2.png";
import sliderImage3 from "@/shared/assets/images/sliderImage3.png";
import dcShoesPicture from "@shared/assets/images/dcPromoImage.png";
import heartImage from "@shared/assets/images/brandImage1.png";
import treeImage from "@shared/assets/images/brandImage2.png";
import dcImage from "@shared/assets/images/brandImage3.png";
import dcLogoPromoImage from "@shared/assets/images/dcLogoPromo.svg";
import quicksilverImage from "@shared/assets/images/brandImage4.png";
import billabongImage from "@shared/assets/images/brandImage5.png";
import boardridersImage from "@shared/assets/images/brandImage6.png";
import libTecImage from "@shared/assets/images/brandImage7.png";
import vaImage from "@shared/assets/images/brandImage8.png";
import gnuImage from "@shared/assets/images/brandImage9.png";
import skullcandyImage from "@shared/assets/images/brandImage10.png";
import promoImage1 from "@shared/assets/images/promoImage1.png";
import promoImage2 from "@shared/assets/images/promoImage2.png";

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
const promoTitles = ["НАЗВАНИЕ АКЦИИ №1", "НАЗВАНИЕ АКЦИИ №2"];
export const HomePage = () => {
  const navigate = useNavigate();
  const { data: products } = useQuery<IProduct[], Error>({
    queryKey: ["products"],
    queryFn: getProductCard,
  });

  return (
    <Flex maxWidth={1920} margin="0 auto" direction="column" align="center">
      <section className={styles.slider}>
        <div className={styles.sliderContainer}>
          <CustomSwiper
            images={[sliderImage1, sliderImage2, sliderImage3]}
            slidesPerView={1.5}
            spaceBetween={25}
            centeredSlides={true}
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
        <BrandSlider brands={brands} />
        <PromoSlider
          promoImages={[promoImage1, promoImage2]}
          promoTitles={promoTitles}
        />
      </section>
      <section className={styles.products}>
        <div className={styles.productsTitleWrapper}>
          <p className={styles.productsTitleText}>Новинки</p>
        </div>
        <div className={styles.productsSlider}>
          <CustomSwiper
            slidesPerView={4}
            navigation={true}
            spaceBetween={25}
            centeredSlides={true}
            loop={true}
            style={{
              maxWidth: "1680px",
              margin: "0 auto",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            {products?.slice(0, 8).map((product: IProduct) => (
              <ProductCard
                key={product.id}
                id={product.id}
                brand={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
              />
            ))}
          </CustomSwiper>
        </div>
        <Button
          title="Показать больше"
          variant="black"
          className={styles.productsButton}
          size="small"
          onClick={() => {
            navigate("/products");
          }}
        />
      </section>
      <section className={styles.dcPromo}>
        <div className={styles.dcPromoWrapper}>
          <div className={styles.dcPromoItemWrapper}>
            <picture className={styles.dcPromoItemImage}>
              <source srcSet={dcShoesPicture} type="image/png" />
              {/* Тут будет еще один source*/}
              <img src={dcShoesPicture} alt="dcshoes-image" />
            </picture>
            <img
              src={dcLogoPromoImage}
              alt="dc-logo-promo"
              className={styles.dcPromoLogo}
            />
            <div className={styles.dcPromoItemContent}>
              <p className={styles.dcPromoItemTitle}>Название акции</p>
              <p className={styles.dcPromoItemDescription}>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому.
              </p>
            </div>
          </div>
          <div className={styles.dcPromoSlider}>
            <p className={styles.dcPromoSliderTitle}>
              DC Shoes популярное в коллекции
            </p>
            <CustomSwiper
              slidesPerView={4}
              navigation={true}
              spaceBetween={25}
              centeredSlides={true}
              loop={true}
              style={{
                maxWidth: "1680px",
                margin: "0 auto",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              {products?.slice(0, 8).map((product: IProduct) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  brand={product.title}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </CustomSwiper>
          </div>
          <Button
            title="Показать больше"
            variant="black"
            className={styles.productsButton}
            size="small"
            onClick={() => {
              navigate("/products");
            }}
          />
        </div>
      </section>
      <section className={styles.blog}>
        <BlogSlider />
      </section>
    </Flex>
  );
};
