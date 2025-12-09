import { FooterHeader } from "./footerHeader";
import { FooterMiddle } from "./footerMiddle";
import { FooterBottom } from "./footerBottom";
import styles from "./footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <FooterHeader />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </footer>
  );
};
