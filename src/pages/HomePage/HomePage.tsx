import "./HomePage.scss";
import { Button } from "@/shared";
import { Input } from "@/shared/ui/Input";
import { useState } from "react";
import bonusCardImage from "@/shared/assets/images/bonusCard.svg";
import promoCardImage from "@/shared/assets/images/promoCard.svg";
import questionMarkImage from "@/shared/assets/images/questionmark.svg";
import applyButtonImage from "@/shared/assets/images/arrowRight.svg";
const HomePage = () => {
  const [promoCard, setPromoCard] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bonusCard, setBonusCard] = useState("");
  const handlePromoCardChange =  (value: string) => {
    if (/^\d*$/.test(value) && value.length <= 16) {
      setPromoCard(value);
    }
  };
  const handlePhoneNumberChange = (value: string) => {
    if (/^\d*$/.test(value) && value.length <= 16) {
      setPhoneNumber(value);
    }
  };
  const handleBonusCardChange = (value: string) => {
    if (/^\d*$/.test(value) && value.length <= 16) {
      setBonusCard(value);
    }
  };
  const handleApplyPromoCard = () => {
    setPromoCard("");
  };
  return (
    <div className="home-page">
      <div className="button-container">
        <Button
          title="Проверить даты доставки"
          variant="black"
          size="small"
          onClick={() => {}}
          disabled={false}
        />
      </div>
      <div className="button-container">
        <Button
          title="ПЕРЕЙТИ К ПОКУПКАМ"
          variant="red"
          size="large"
          onClick={() => {}}
          disabled={false}
        />
      </div>
      <div className="button-container">
        <Button
          title="Проверить даты доставки"
          variant="blackBorder"
          size="small"
          onClick={() => {}}
          disabled={false}
        />
      </div>
      <div className="button-container">
        <Button
          title="ПЕРЕЙТИ К ПОКУПКАМ"
          variant="redBorder"
          size="large"
          onClick={() => {}}
          disabled={false}
        />
      </div>
      <div className="inputContainer">
        <Input
          className="defaultInput"
          containerClassName="bonusCard"
          placeholder="Введите номер карты"
          id="bonusCard"
          value={bonusCard}
          onChange={handleBonusCardChange}
          description="Номер на обратной стороне карты"
          label={
            <div className="labelContainer">
              <img
                src={bonusCardImage}
                alt="bonusCard"
                className="bonusCardImage"
              />
              <span className="bonusCardLabel">Бонусная карта</span>
              <img
                src={questionMarkImage}
                alt="questionMark"
                className="questionMarkImage"
              />
            </div>
          }
        />

        <div className="promoCardContainer">
          <Input
            className="promoCardInput"
            containerClassName="promoCard"
            placeholder="Введите промо код"
            id="promoCard"
            value={promoCard}
            onChange={handlePromoCardChange}
            label={
              <div className="labelContainer">
                <img
                  src={promoCardImage}
                  alt="promoCard"
                  className="promoCardImage"
                />
                <span className="promoCardLabel">Промо код</span>
                <img
                  src={questionMarkImage}
                  alt="questionMark"
                  className="questionMarkImage"
                />
              </div>
            }
            sendButton = {<button className="applyButton" onClick={handleApplyPromoCard}><img src={applyButtonImage} alt="applyButton" /></button>}
          />
        </div>

        <Input
          className="defaultInput"
          containerClassName="phoneNumber"
          placeholder="+7 ( ХХХ) ХХХ ХХ ХХ"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          label={
            <div className="labelContainer">
              <span className="phoneNumberLabel">
                Телефон для смс уведомлений
              </span>{" "}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
