import styles from "./footerBottom.module.scss";
import { NavLink } from "react-router-dom";
import twitterIcon from "../../../shared/assets/images/twitterIcon.svg";
import facebookIcon from "../../../shared/assets/images/facebookIcon.svg";
import twitchIcon from "../../../shared/assets/images/twitchIcon.svg";
import youtubeIcon from "../../../shared/assets/images/youtubeIcon.svg";
import instagramIcon from "../../../shared/assets/images/instagramIcon.svg";

const socialLinks = [
  {
    name: "Twitter",
    href: "/twitter",
    icon: twitterIcon,
  },
  {
    name: "Facebook",
    href: "/facebook",
    icon: facebookIcon,
  },
  {
    name: "Twitch",
    href: "/twitch",
    icon: twitchIcon,
  },
  {
    name: "YouTube",
    href: "/youtube",
    icon: youtubeIcon,
  },
  {
    name: "Instagram",
    href: "/instagram",
    icon: instagramIcon,
  },
];
export const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.footerBottom__social}>
        {socialLinks.map((link) => (
          <NavLink to={link.href} className={styles.footerBottom__socialLink} aria-label={`Перейти к ${link.name}`}>
            <img src={link.icon} alt={link.name} />
          </NavLink>
        ))}
      </div>
      <div className={styles.footerBottom__textWrapper}>
        <p className={styles.footerBottom__text}>
          © 2020 Brd.ru. Все права защищены
        </p>
      </div>
    </div>
  );
};
