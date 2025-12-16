import styles from "./HomePage.module.scss";
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
      <div className={styles.brandsSlider} aria-label="Логотипы брендов">
        <div className={styles.brandsSliderItem}>{brands.map((brand) => (
          <img src={brand.image} alt={brand.name} />
        ))}</div>
      </div>
    </div>
  );
};
