import styles from "./LoyaltyProgram.module.scss";
import loyaltyProgramImage from "@shared/assets/images/loyaltyProgramImage.png";
import boardridersLogo from "@shared/assets/images/boardridersLogo.svg";
import loyaltyProgramImage2 from "@shared/assets/images/loyaltyProgramImage2.png";
import loyaltyProgramImage3 from "@shared/assets/images/loyaltyProgramMailIcon.svg";
import { Button } from "@/shared/ui";
import sendArrowBlack from "@shared/assets/images/sendArrowBlack.svg";
import emailBlackIcon from "@shared/assets/images/mailBlackVar.svg";
export const LoyaltyProgram = () => {
  return (
    <div className={styles.loyaltyProgram}>
      <div className={styles.loyaltyProgramWrapper}>
        <div className={styles.loyaltyProgramImage}>
            <img src={loyaltyProgramImage} alt="loyalty-program-image" />
            <div className={styles.loyaltyProgramContent}>
                <img src={boardridersLogo} alt="loyalty-program-image" />
                <p className={styles.loyaltyProgramContentTitle}> Программа лояльности </p>
                <p className={styles.loyaltyProgramContentDescription}>Зарабатывайте баллы и получайте преимущества</p>
                <Button title="Вступить в клуб" variant="loyaltyProgram" size="loyaltyProgram" />
            </div>
        </div>
      </div>
      <div className={styles.loyaltyProgramWrapper}>
        <div className={styles.loyaltyProgramImage}>
          <img src={loyaltyProgramImage2} alt="loyalty-program-image" />
          <div className={styles.loyaltyProgramContent}>
            <img src={loyaltyProgramImage3} alt="loyalty-program-image" />
            <p className={styles.loyaltyProgramContentTitle}> Программа лояльности </p>
            <p className={styles.loyaltyProgramContentDescription}>Зарабатывайте баллы и получайте преимущества</p>
            <label className={styles.loyaltyProgramInputLabel}>
              <div className={styles.loyaltyProgramInputContainer}>
                <input type="email" placeholder="Email" className={styles.loyaltyProgramInput} />
                <button className={styles.loyaltyProgramInputButton} type="submit">
                  <img src={sendArrowBlack} alt="send-icon" />
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};