import styles from "./footerMiddle.module.scss";
import appstoreImage from "../../../shared/assets/images/appstoreIcon.svg";
import googleplayImage from "../../../shared/assets/images/googleplayIcon.svg";
import qrcodeImage from "../../../shared/assets/images/qrCode.svg";
import phoneIcon from "../../../shared/assets/images/phoneIcon.svg";
import mailIcon from "../../../shared/assets/images/mailIcon.svg";
import { NavLink } from "react-router-dom";

const businessLinks = [
  {
    name: "Доставка",
    href: "/delivery",
  },
  {
    name: "Оплата",
    href: "/payment",
  },
  {
    name: "Возврат",
    href: "/return",
  },
  {
    name: "Отзывы",
    href: "/reviews",
  },
  {
    name: "Акции и скидки",
    href: "/sales",
  }
];
const companyLinks = [
  {
    name: "Контакты",
    href: "/contacts",
  },
  {
    name: "О boardriders",
    href: "/boardriders",
  },
  {
    name: "Вакансии",
    href: "/vacancies",
  },
  {
    name: "Публичная оферта",
    href: "/public-offer",
  },
];
const boardridersLinks = [
  {
    name: "Франчайзинг",
    href: "/franchising",
  },
  {
    name: "Quicksilver",
    href: "/quicksilver",
  },
  {
    name: "Roxy",
    href: "/roxy",
  },
  {
    name: "DC Shoes",
    href: "/dc-shoes",
  },
  {
    name: "Boardriders Club",
    href: "/boardriders-club",
  },
];
export const FooterMiddle = () => {
  return (
    <div className={styles.footerMiddle}>
      <div className={styles.footerMiddle__mainItem}>
        <p className={styles.footerMiddle__mainItemTitle}>
          Доступ к ранним релизам в приложении
        </p>
        <div className={styles.footerMiddle__mainItemApps}>
          <div className={styles.footerMiddle__mainItemAppsLinks}>
            <img src={appstoreImage} alt="appstore-image" />
            <img src={googleplayImage} alt="googleplay-image" />
          </div>
          <img src={qrcodeImage} alt="qrcode-image" />
        </div>
      </div>
      <div className={styles.footerMiddle__mainItemContacts}>
        <p className={styles.footerMiddle__mainItemContactsTitle}>Контакты</p>
        <div className={styles.footerMiddle__mainItemContactsInfo}>
          <img src={phoneIcon} alt="phone-icon" />
          <div className={styles.footerMiddle__mainItemContactsInfoText}>
            <p className={styles.footerMiddle__mainItemContactsInfoTextNumber}>8 (800) 511-74-68</p>
            <p className={styles.footerMiddle__mainItemContactsInfoTextDescription}>
              Бесплатная горячая линия Ежедневно с 9 до 21
            </p>
          </div>
        </div>
        <div className={styles.footerMiddle__mainItemContactsInfo}>
          <img src={mailIcon} alt="email-icon" />
          <div className={styles.footerMiddle__mainItemContactsInfoText}>
            <p className={styles.footerMiddle__mainItemContactsInfoTextTitle}>Контактный Email</p>
            <p className={styles.footerMiddle__mainItemContactsInfoTextDescription}>info@brd.ru</p>
          </div>
        </div>
      </div>
      <div className={styles.footerMiddle__Item}>
        <p className={styles.footerMiddle__ItemTitle}>Помощь</p>
        <ul className={styles.footerMiddle__ItemList}>
          {businessLinks.map((link) => (
            <li className={styles.footerMiddle__ItemListLink}>
              <NavLink to={link.href} className={styles.footerMiddle__ItemListLink}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerMiddle__Item}>
        <p className={styles.footerMiddle__ItemTitle}>Компания</p>
        <ul className={styles.footerMiddle__ItemList}>
            {companyLinks.map((link) => (
                <li className={styles.footerMiddle__ItemListLink}>
                    <NavLink to={link.href} className={styles.footerMiddle__ItemListLink}>{link.name}</NavLink>
                </li>
            ))}
        </ul>
      </div>
      <div className={styles.footerMiddle__Item}>
        <p className={styles.footerMiddle__ItemTitle}>Boardriders Inc.</p>
        <ul className={styles.footerMiddle__ItemList}>
            {boardridersLinks.map((link) => (
                <li className={styles.footerMiddle__ItemListLink}>
                    <NavLink to={link.href} className={styles.footerMiddle__ItemListLink}>{link.name}</NavLink>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
