import "../../shared/assets/fonts/_fonts.scss";
import styles from "./header.module.scss";
import { HeaderTop } from "./headerTop/headerTop";
import { HeaderMiddle } from "./headerMiddle/headerMiddle";
import { HeaderBottom } from "./headerBottom/headerBottom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};
