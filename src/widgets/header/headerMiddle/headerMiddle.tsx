import styles from "../header.module.scss";
import logoImage from "@/shared/assets/images/logo.png";
import profileImage from "@/shared/assets/images/profile.svg";
import savedImage from "@/shared/assets/images/saved.svg";
import cartImage from "@/shared/assets/images/cart.svg";
import searchImage from "@/shared/assets/images/search.svg";
import headerMiddleStyles from "./headerMiddle.module.scss";
import { NavLink } from "react-router-dom";

export const HeaderMiddle = ( ) => {
  return (
    <div className={headerMiddleStyles.header__middle}>
        <div className={headerMiddleStyles.container}>
            <div className={headerMiddleStyles.header__gender}>
              <NavLink
                to="/men"
                className={headerMiddleStyles.header__genderText}
                aria-label="Перейти в раздел для мужчин"
              >
                Мужчинам
              </NavLink>
              <NavLink
                to="/women"
                className={headerMiddleStyles.header__genderText}
                aria-label="Перейти в раздел для женщин"
              >
                Женщинам
              </NavLink>
              <NavLink
                to="/kids"
                className={headerMiddleStyles.header__genderText}
                aria-label="Перейти в раздел для детей"
              >
                Детям
              </NavLink>
            </div>
            <div className={headerMiddleStyles.header__logo}>
              <NavLink
                to="/HomePage"
                className={headerMiddleStyles.header__logoLink}
                aria-label="Перейти на главную страницу"
              >
                <picture className={headerMiddleStyles.header__logoIcon}>
                  <source srcSet={logoImage} type="image/png" />
                  <img src={logoImage} alt="logo" />
                </picture>
              </NavLink>
            </div>
            <div className={headerMiddleStyles.header__actions}>
              <a
                href="#"
                id="openModal"
                className={headerMiddleStyles.header__action}
                aria-label="Открыть форму входа"
              >
                <img
                  src={profileImage}
                  alt="profile-icon"
                  className={headerMiddleStyles.icon}
                />
                <p className={headerMiddleStyles.header__actionText}>Войти</p>
              </a>
              <a
                href="#"
                className={headerMiddleStyles.header__action}
                aria-label="Перейти в избранное"
              >
                <img src={savedImage} alt="save-icon" className={headerMiddleStyles.icon} />
                <p className={headerMiddleStyles.header__actionText}>Избранное</p>
              </a>
              <a
                href="#"
                className={headerMiddleStyles.header__action}
                aria-label="Перейти в корзину"
              >
                <img src={cartImage} alt="cart-icon" className={headerMiddleStyles.icon} />
                <p className={headerMiddleStyles.header__actionText}>Корзина</p>
              </a>
              <a
                href="#"
                className={headerMiddleStyles.header__action}
                aria-label="Открыть поиск"
              >
                <img
                  src={searchImage}
                  alt="search-icon"
                  className={headerMiddleStyles.icon}
                />
                <p className={headerMiddleStyles.header__actionText}>Поиск</p>
              </a>
            </div>
          </div>
        </div>
);
};