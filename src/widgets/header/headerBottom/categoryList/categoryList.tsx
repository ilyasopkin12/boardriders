import categoryListStyles from "./categoryList.module.scss";
import { NavLink } from "react-router-dom";


const categoryList = [
    {
        "name": "Новинки",
        "href": "/snowboards",
    },
    {
        "name": "Сноуборды",
        "href": "/skis",
    },
    {
        "name": "Лыжи",
        "href": "/skateboards",
    },
    {
        "name": "Скейты",
        "href": "/longboards",
    },
    {
        "name": "Лонгборды",
        "href": "/skateboards",
    },
    {
        "name": "Вейкборды",
        "href": "/longboards",
    },
    {
        "name": "Серфы",
        "href": "/longboards",
    },
    {
        "name": "SUP",
        "href": "/surfboards",
    },
    {
        "name": "Одежда",
        "href": "/clothes",
    },
    {
        "name": "Обувь",
        "href": "/shoes",
    },
    {
        "name": "Аксессуары",
        "href": "/accessories",
    },
    {
        "name": "Бренды",
        "href": "/brands",
    },
    {
        "name": "Распродажа",
        "href": "/sale",
    },
];
export const CategoryList = () => {
    return (
        <div className={categoryListStyles.container}>
            {categoryList.map((value, index) => (
                <div key={index}>
                    <NavLink className={value.href === "/sale" ? categoryListStyles.header__bottomSale : categoryListStyles.header__bottomText} to={value.href} key={index}>{value.name}</NavLink>
                </div>
            ))}
        </div>
    );
};

/* {categoryList.map((value,index) => (
    <div key={index}>
        <NavLink className={value.href ==="sale" ? categoryListStyles.header__bottomSale : categoryListStyles.header__bottomText} to{value.href} key={index}>{value.name}</NavLink>
    </div> 
))} */