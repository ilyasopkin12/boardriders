import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Swiper.module.scss";
import prevArrow from "@/shared/assets/images/navigationArrowLeft.svg";
import nextArrow from "@/shared/assets/images/navigationArrowRight.svg";
import { NavigationOptions } from "swiper/types";
interface ICustomSwiperProps {
  images?: string[];
  slidesPerView: number;
  centeredSlides?: boolean;
  loop?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  spaceBetween?: number;
  title?: string[];
  navigation?: boolean;
}
export const CustomSwiper = ({
  images,
  slidesPerView,
  centeredSlides = false,
  loop = false,
  style,
  spaceBetween = 0,
  navigation = false,
  title,
  children,
}: ICustomSwiperProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const renderSlides = () => {
    if (children) {
      return React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          {child}
        </SwiperSlide>
      ));
    }
    if (images) {
      return images.map((image, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          {title && title[index] && (
            <h2 className={styles.swiperSlideTitle}>{title[index]}</h2>
          )}
          <img src={image} alt={`slider-image-${index}`} />
        </SwiperSlide>
      ));
    }
    return null;
  };
  return (
    <div className={styles.swiperContainer}>
    {navigation && (
      <div className={styles.customNavigation}>
        <button ref={prevRef} className={styles.customPrev} aria-label="Previous slide">
          <img src={prevArrow} alt="prev-arrow" />
        </button>
        <button ref={nextRef} className={styles.customNext} aria-label="Next slide">
          <img src={nextArrow} alt="next-arrow" />
        </button>
      </div>
    )}
    <Swiper
      className={styles.swiper}
      modules={[Navigation]}
      navigation={
        navigation
          ? {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }
          : false
      }
      onBeforeInit={(swiper) => {
        if (navigation) {
          (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
          (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
        }
      }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      centeredSlides={centeredSlides}
      loop={loop}
      style={style}
    >
      {renderSlides()}
    </Swiper>
  </div>
  );
};
