import styles from "./HomePage.module.scss";
import { CustomSwiper } from "@/shared/ui/Swiper";
import sliderImage1 from "@/shared/assets/images/sliderImage1.png";
import sliderImage2 from "@/shared/assets/images/sliderImage2.png";
import sliderImage3 from "@/shared/assets/images/sliderImage3.png";
export const HomePage = () => {
  const titles = ["WINTER SALE ДО -70%", "LIB TECH", "Boardriders"];
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
    </div>
  );
};
