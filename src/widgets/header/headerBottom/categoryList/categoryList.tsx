import categoryListStyles from "./categoryList.module.scss";

export const CategoryList = () => {
    return (
        <div className={categoryListStyles.container}>
            <nav
            className={categoryListStyles.header__bottomNav}
            aria-label="Основная навигация"
            >
            <ul className={categoryListStyles.header__bottomList}>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к новинкам"
                >
                    Новинки
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к сноубордам"
                >
                    Сноуборд
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к лыжам"
                >
                    Лыжи
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к скейтам"
                >
                    Скейт
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к лонгбордам"
                >
                    Лонгборд
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к вейкбордам"
                >
                    Вейкборд
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к серфам"
                >
                    Серф
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к SUP"
                >
                    Sup
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к одежде"
                >
                    Одежда
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к обуви"
                >
                    Обувь
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к аксессуарам"
                >
                    Аксессуары
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomText}
                    aria-label="Перейти к брендам"
                >
                    Бренды
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={categoryListStyles.header__bottomSale}
                    aria-label="Перейти к распродаже"
                >
                    Распродажа
                </a>
                </li>
            </ul>
            </nav>
        </div>
    );
};