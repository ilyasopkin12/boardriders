import categoryListStyles from "./categoryList.module.scss";
import { NavLink } from "react-router-dom";


const categoryList = {
    "snowboards": {
        "name": "Сноуборды",
        "href": "/snowboards",
        "className": categoryListStyles.header__bottomText,
    },
    "skis": {
        "name": "Лыжи",
        "href": "/skis",
        "className": categoryListStyles.header__bottomText,
    },
    "skateboards": {
        "name": "Скейты",
        "href": "/skateboards",
        "className": categoryListStyles.header__bottomText,
    },
    "longboards": {
        "name": "Лонгборды",
        "href": "/longboards",
        "className": categoryListStyles.header__bottomText,
    },
    "wakeboards": {
        "name": "Вейкборды",
        "href": "/wakeboards",
        "className": categoryListStyles.header__bottomText,
    },
    "surfboards": {
        "name": "Серфы",
        "href": "/surfboards",
        "className": categoryListStyles.header__bottomText,
    },
    "supboards": {
        "name": "SUP",
        "href": "/supboards",
        "className": categoryListStyles.header__bottomText,
    },
    "clothes": {
        "name": "Одежда",
        "href": "/clothes",
        "className": categoryListStyles.header__bottomText,
    },
    "shoes": {
        "name": "Обувь",
        "href": "/shoes",
        "className": categoryListStyles.header__bottomText,
    },
    "accessories": {
        "name": "Аксессуары",
        "href": "/accessories",
        "className": categoryListStyles.header__bottomText,
    },
    "brands": {
        "name": "Бренды",
        "href": "/brands",
        "className": categoryListStyles.header__bottomText,
    },
    "sale": {
        "name": "Распродажа",
        "href": "/sale",
        "className": categoryListStyles.header__bottomSale,
    },
}
export const CategoryList = () => {
    return (
        <div className={categoryListStyles.container}>
            {Object.entries(categoryList).map(([key, value]) => (
                <div key={key}>
                    <NavLink className={value.className} to={value.href}>{value.name}</NavLink>
                </div>
            ))}
        </div>
    );
};
