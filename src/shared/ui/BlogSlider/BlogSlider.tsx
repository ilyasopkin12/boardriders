import { CustomSwiper } from "../Swiper/Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./BlogSlider.module.scss";
import blogImage1 from "@shared/assets/images/blogVideoPreview.png";
import blogImage2 from "@shared/assets/images/sliderImage1.png";
import blogSliderLine from "@shared/assets/images/blogSliderLine.svg";
export const BlogSlider = () => {
  return (
    <CustomSwiper
      slidesPerView={1}
      navigation={true}
      spaceBetween={5}
      centeredSlides={true}
      loop={true}
      style={{ width: "1905px" }}
    >
      <SwiperSlide className={styles.blogSliderItem}>
        <div className={styles.blogSliderItemWrapper}>
          <img
            className={styles.blogSliderItemWrapperImage}
            src={blogImage1}
            alt="blog-image"
          />
        </div>
        <div className={styles.blogSliderItemContent}>
          <div className={styles.blogSliderItemHeader}>
            <p className={styles.blogSliderItemCategory}> Блоги </p>
            <p className={styles.blogSliderItemMore}> Все блоги </p>
          </div>
          <div className={styles.blogSliderItemBody}>
            <p className={styles.blogSliderItemBodyTitle}>
              Очень преочень длинное название блога
            </p>
            <p className={styles.blogSliderItemBodyDescription}>
              Меня не спрашивали, а надо было спросить, что означает имя
              Заратустры именно в моих устах — в устах первого имморалиста: ведь
              то, в чём состоит неслыханная уникальность этого перса в истории,
              являет собою противоположность как раз этому.
            </p>
            <p className={styles.blogSliderItemBodyDescription}>
              Меня не спрашивали, а надо было спросить, что означает имя
              Заратустры именно в моих устах — в устах первого имморалиста: ведь
              то, в чём состоит неслыханная уникальность этого перса в истории,
              являет собою противоположность как раз этому...
            </p>
          </div>
          <div className={styles.blogSliderItemFooter}>
            <img src={blogSliderLine} alt="blog-slider-line" />
            <p className={styles.blogSliderItemFooterText}> Читать продолжение </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.blogSliderItem}>
        <div className={styles.blogSliderItemWrapper}></div>
      </SwiperSlide>
    </CustomSwiper>
  );
};
