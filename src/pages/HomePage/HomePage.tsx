import styles from "./HomePage.module.scss";
import { CustomSwiper } from "@/shared/ui/Swiper";
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

export const HomePage = () => {
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
        <CustomSwiper
          images={[sliderImage1, sliderImage2, sliderImage3]}
          slidesPerView={1.5}
          spaceBetween="25px"
          centeredSlides={true}
          centeredSlidesBound={true}
          loop={true}
          style={{
            maxWidth: "1920px",
            margin: "0 auto",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
          navigation={true}
          title={titles}
        />
      </section>
      <div className={styles.brandsSlider} aria-label="Логотипы брендов">
        <div className={styles.brandsSliderItem}>
          {brands.map((brand, index) => (
            <img key={index} src={brand.image} alt={brand.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
