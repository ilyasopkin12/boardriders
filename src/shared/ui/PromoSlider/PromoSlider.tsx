import styles from "./PromoSlider.module.scss";

interface IPromoSliderProps {
    promoImages: string[];
    promoTitles: string[];
}

export const PromoSlider = ({ promoImages, promoTitles }: IPromoSliderProps) => {
    return (
    <div className={styles.promoSlider}>
        {promoImages.map((image, index) => (
            <div className={styles.promoSliderItem} key={index}>
                <div className={styles.promoSliderItemImage}>
                    <img src={image} alt="action-image" />
                </div>
                <div className={styles.promoSliderItemTitle}>
                    <h2 className={styles.promoSliderItemTitleText}>
                        {promoTitles[index]}
                    </h2>
                </div>
            </div>
        ))}
    </div>
    )
}