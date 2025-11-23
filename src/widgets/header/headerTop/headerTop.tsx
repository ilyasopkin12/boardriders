import styles from "./headerTop.module.scss";
import pointIcon from "../../../shared/assets/images/point.svg";
import arrowIcon from "../../../shared/assets/images/arrow.svg";
import deliveryIcon from "../../../shared/assets/images/delivery.svg";
import paymentIcon from "../../../shared/assets/images/payment.svg";
import returnIcon from "../../../shared/assets/images/return.svg";
import "../../../shared/assets/fonts/_fonts.scss";
import headerTopStyles from "./headerTop.module.scss";

export const HeaderTop = ( ) => {
  return (
    <div className={headerTopStyles.header__top}>
      <div className={headerTopStyles.container}>
        <div className={styles.header__topLeft}>
          <div className={headerTopStyles.header__itemLocation}>
            <img
              src={pointIcon}
              alt="point-icon"
              className={headerTopStyles.pointIcon}
            />
            <p className={headerTopStyles.header__text}>Ваш регион доставки:</p>
            <p
              className={headerTopStyles.header__text}
              aria-label="Текущий регион доставки"
            >
              Москва
            </p>
            <img
              src={arrowIcon}
              alt="state__selector-icon"
              className={headerTopStyles.header__arrowDownIcon}
            />
          </div>
          <div className={headerTopStyles.header__itemNav}>
            <a
              href="#"
              className={headerTopStyles.header__topText}
              aria-label="Перейти в магазин"
            >
              Магазин
            </a>
            <a
              href="#"
              className={headerTopStyles.header__topText}
              aria-label="Перейти в раздел помощи"
            >
              Помощь
            </a>
            <a
              href="#"
              className={headerTopStyles.header__topText}
              aria-label="Перейти в блоги"
            >
              Блоги
            </a>
          </div>
        </div>
        <div className={headerTopStyles.header__topRight}>
          <div className={headerTopStyles.header__itemDelivery}>
            <img
              src={deliveryIcon}
              alt="delivery-icon"
              className={headerTopStyles.icon}
            />
            <p
              className={headerTopStyles.header__topText}
              aria-label="Информация о бесплатной доставке"
            >
              Бесплатная доставка*
            </p>
          </div>
          <div className={headerTopStyles.header__itemPayment}>
            <img
              src={paymentIcon}
              alt="payment-icon"
              className={headerTopStyles.icon}
            />
            <p
              className={headerTopStyles.header__topText}
              aria-label="Информация об оплате при получении"
            >
              Оплата при получении
            </p>
          </div>
          <div className={headerTopStyles.header__itemReturn}>
            <img src={returnIcon} alt="return-icon" className={headerTopStyles.icon} />
            <p
              className={headerTopStyles.header__topText}
              aria-label="Информация о возврате товаров"
            >
              Возврат в течение 14 дней
            </p>
          </div>
        </div>
      </div>
</div>
  );
};