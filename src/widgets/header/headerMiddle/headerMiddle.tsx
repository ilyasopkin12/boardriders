import styles from "../header.module.scss";
import logoImage from "@/shared/assets/images/logo.png";
import profileImage from "@/shared/assets/images/profile.svg";
import savedImage from "@/shared/assets/images/saved.svg";
import cartImage from "@/shared/assets/images/cart.svg";
import searchImage from "@/shared/assets/images/search.svg";
import logoImageMobile from "@/shared/assets/images/logoMobile.png";
import headerMiddleStyles from "./headerMiddle.module.scss";
import burgerMenuImage from "@/shared/assets/images/burgerMenu.svg";
import { NavLink } from "react-router-dom";

const genderList = [
  {
    name: "Мужчинам",
    href: "/men",
  },
  {
    name: "Женщинам",
    href: "/women",
  },
  {
    name: "Детям",
    href: "/kids",
  },
];

export const HeaderMiddle = () => {
  return (
    <div className={headerMiddleStyles.header__middle}>
      <div className={headerMiddleStyles.container}>
        <div className={headerMiddleStyles.header__gender}>
          {genderList.map((value, index) => (
            <NavLink
              to={value.href}
              className={headerMiddleStyles.header__genderText}
              aria-label={`Перейти в раздел для ${value.name}`}
              key={index}
            >
              {value.name}
            </NavLink>
          ))}
        </div>
        <div className={headerMiddleStyles.header__mobileActions}>
          <div className={headerMiddleStyles.header__burgerMenu}>
            <button
              type="button"
              className={headerMiddleStyles.header__actionBurgerMenu}
              aria-label="Открыть меню"
            >
              <img
                src={burgerMenuImage}
                alt="burger-menu-icon"
                className={headerMiddleStyles.icon}
              />
            </button>
          </div>
          <div className={headerMiddleStyles.header__searchMobile}>
              <button
              type="button"
              className={headerMiddleStyles.header__actionSearchButtonMobile}
              aria-label="Открыть поиск"
            >
              <img
                src={searchImage}
                alt="search-icon"
                className={headerMiddleStyles.icon}
              />
              <p className={headerMiddleStyles.header__actionText}>Поиск</p>
            </button>
          </div>
        </div>
        <div className={headerMiddleStyles.header__logo}>
          <NavLink
            to="/HomePage"
            className={headerMiddleStyles.header__logoLink}
            aria-label="Перейти на главную страницу"
          >
            <picture className={headerMiddleStyles.header__logoIcon}>
              <source
                srcSet={logoImageMobile}
                media="(max-width: 414px)"
                type="image/png"
              />
              <img src={logoImage} alt="logo" />
            </picture>
          </NavLink>
        </div>
        <div className={headerMiddleStyles.header__actions}>
          <button
            type="button"
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
          </button>
          <NavLink
            to="/favorites"
            className={headerMiddleStyles.header__action}
            aria-label="Перейти в избранное"
          >
            <img
              src={savedImage}
              alt="save-icon"
              className={headerMiddleStyles.icon}
            />
            <p className={headerMiddleStyles.header__actionText}>Избранное</p>
          </NavLink>
          <NavLink
            to="/cart"
            className={headerMiddleStyles.header__action}
            aria-label="Перейти в корзину"
          >
            <img
              src={cartImage}
              alt="cart-icon"
              className={headerMiddleStyles.icon}
            />
            <p className={headerMiddleStyles.header__actionText}>Корзина</p>
          </NavLink>
          <button
            type="button"
            className={headerMiddleStyles.header__action}
            aria-label="Открыть поиск"
          >
            <img
              src={searchImage}
              alt="search-icon"
              className={headerMiddleStyles.icon}
            />
            <p className={headerMiddleStyles.header__actionText}>Поиск</p>
          </button>
        </div>
      </div>
    </div>
  );
};
