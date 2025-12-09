import styles from "./footerHeader.module.scss";
import whiteLogo from "../../../shared/assets/images/whiteLogo.svg";
import whiteLogo2 from "../../../shared/assets/images/whiteLogo2.svg";
import emailGray from "../../../shared/assets/images/mailgrayIcon.svg"
import sendWhite from "../../../shared/assets/images/sendArrowRight.svg"
export const FooterHeader = () => {
  return (
    <div className={styles.footerHeader}>
      <div className={styles.footerHeader__logoWrapper}>
        <img src={whiteLogo} alt="logo" />
        <img src={whiteLogo2} alt="logo" />
      </div>
      <div className={styles.footerHeader__subscribe}>
        <label className={styles.footerHeader__subscribeLabel}>
          <span className={styles.footerSubscribeIcon} aria-hidden="true">
            <img src={emailGray} alt="email-icon" />
          </span>
          <input
            id="subscribeEmail"
            type="email"
            placeholder= "Подпишись на рассылку и получи -10% скидку"
            aria-label="Введите email для подписки на рассылку"
            className={styles.footerHeader__subscribeInput}
          />
          <button type="submit" className={styles.footerHeader__subscribeButton}>
            <img src={sendWhite} alt="send-icon" />
          </button>
        </label>
      </div>
    </div>
  );
};
