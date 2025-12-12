import styles from "./footerHeader.module.scss";
import whiteLogo from "@shared/assets/images/whiteLogo.svg";
import whiteLogo2 from "@shared/assets/images/whiteLogo2.svg";
import emailGray from "@shared/assets/images/mailgrayIcon.svg"
import sendWhite from "@shared/assets/images/sendArrowRight.svg"
import vkIcon from "@shared/assets/images/vkIconMobile.svg";
import instagramIcon from "@shared/assets/images/instagramIconMobile.svg";
import pictureFooter1 from "@shared/assets/images/pictureFooter1.png";
import pictureFooter2 from "@shared/assets/images/pictureFooter2.png";
import pictureFooter3 from "@shared/assets/images/pictureFooter3.png";
import pictureFooter4 from "@shared/assets/images/pictureFooter4.png";
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
      <div className={styles.footerHeader__mobileSubscribe}>
        <div className={styles.footerHeader__mobileSubscribeTop}>
          <p className={styles.footerHeader__mobileSubscribeTitle}>Подписывайся на нас</p>
          <p className={styles.footerHeader__mobileSubscribeSocial}>@boardriders</p>
          <div className={styles.footerHeader__mobileSubscribeTopSocial}>
            <img src={vkIcon} alt="vk-icon" />
            <img src={instagramIcon} alt="instagram-icon" />
          </div>
        </div>
        <div className={styles.footerHeader__mobileSubscribeBottom}>
          <div className={styles.footerHeader__mobileSubscribeBottomItem}>
            <img src={pictureFooter1} alt="picture-footer-1" />
            <img src={pictureFooter2} alt="picture-footer-2" />
          </div>
          <div className={styles.footerHeader__mobileSubscribeBottomItem}>
            <img src={pictureFooter3} alt="picture-footer-3" />
            <img src={pictureFooter4} alt="picture-footer-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
