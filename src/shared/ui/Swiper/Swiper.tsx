import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Swiper.module.scss";
import prevArrow from "@/shared/assets/images/navigationArrowLeft.svg";
import nextArrow from "@/shared/assets/images/navigationArrowRight.svg";
interface ICustomSwiperProps {
  images?: string[];
  slidesPerView: number;
  centeredSlides?: boolean;
  loop?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  spaceBetween?: string;
  navigation?: boolean;
  modules?: any[];
  centeredSlidesBound?: boolean;
  title?: string[];
}
export const CustomSwiper = ({
  images,
  slidesPerView,
  centeredSlides,
  loop,
  style,
  navigation,
  spaceBetween,
  title,
  children,
}: ICustomSwiperProps) => {
  return (
    <div className={styles.swiperContainer}>
      <div className={styles.customNavigation}>
        <button className={styles.customPrev} data-swiper-button-prev>
          <img src={prevArrow} alt="prev-arrow" />
        </button>
        <button className={styles.customNext} data-swiper-button-next>
          <img src={nextArrow} alt="next-arrow" />
        </button>
      </div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        navigation={{
          nextEl: "[data-swiper-button-next]",
          prevEl: "[data-swiper-button-prev]",
        }}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        loop={loop}
        style={style}
      >
        {children
          ? React.Children.map(children, (child, index) => (
              <SwiperSlide style={{ maxWidth: "1360px" }} key={index}>
                {child}
              </SwiperSlide>
            ))
          : images?.map((image, index) => (
              <SwiperSlide style={{ maxWidth: "1360px" }} key={index}>
                <div className={styles.swiperSlide}>
                  {title && title[index] && (
                    <h2 className={styles.swiperSlideTitle}>{title[index]}</h2>
                  )}
                  <img src={image} alt="slider-image" />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};
