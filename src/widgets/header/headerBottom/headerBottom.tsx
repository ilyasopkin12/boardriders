import headerBottomStyles from "./headerBottom.module.scss";
import { CategoryList } from "./categoryList";

export const HeaderBottom = () => {
  return (
    <div className={headerBottomStyles.header__bottom}>
      <CategoryList />
    </div>
  );
};
