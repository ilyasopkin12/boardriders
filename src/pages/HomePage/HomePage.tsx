import './HomePage.scss';
import { Button } from '@/shared';
import { Input } from '@/shared/ui/Input';
import { useState } from 'react';
import bonusCardImage from '@/shared/assets/bonusCard.svg';
import promoCardImage from '@/shared/assets/promoCard.svg';
import questionMarkImage from '@/shared/assets/questionmark.svg';
import applyButtonImage from '@/shared/assets/arrowRight.svg';
const HomePage = () => {
    const [promoCard, setPromoCard] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bonusCard, setBonusCard] = useState('');
    const handlePromoCardChange = (value: string) => {
        if ( /^\d*$/.test(value) && value.length <= 16) {
            setPromoCard(value);
        }
    }
    const handlePhoneNumberChange = (value: string) => {
        if ( /^\d*$/.test(value) && value.length <= 16) {
            setPhoneNumber(value);
        }
    }
    const handleBonusCardChange = (value: string) => {
        if ( /^\d*$/.test(value) && value.length <= 16) {
            setBonusCard(value);
        }
    }
    const handleApplyPromoCard = () => {
        setPromoCard('');
        console.log('apply promo card');
    }
    return (
        <div className="home-page">
            <h1 className="home-page-title">Home</h1>
            <div className="button-container">
               <Button title="Проверить даты доставки" variant="Black" size="Small" onClick={() => {}} disabled={false}/>
            </div>
            <div className="button-container">
                <Button title="ПЕРЕЙТИ К ПОКУПКАМ" variant="Red" size="Large" onClick={() => {}} disabled={false}/>
            </div>
            <div className="button-container">
                <Button title="Проверить даты доставки" variant="BlackBorder" size="Small" onClick={() => {}} disabled={false}/>
            </div>
            <div className="button-container">
                <Button title="ПЕРЕЙТИ К ПОКУПКАМ" variant="RedBorder" size="Large" onClick={() => {}} disabled={false}/>
            </div>
            <div className="input__container-bonusCard">
                <Input variant="bonusCard" image={bonusCardImage} questionMarkImage={questionMarkImage} placeholder="Введите номер карты"  label="Бонусная карта" id="bonusCard" type="text" value={bonusCard} onChange={handleBonusCardChange} description="Номер на обратной стороне карты" />
            </div>
            <div className="input__container-promoCard">
                <Input variant="promoCard" image={promoCardImage} questionMarkImage={questionMarkImage} placeholder="Введите промо код"  label="Промо код" id="promoCard" type="text" value={promoCard} onChange={handlePromoCardChange} button={<Button image={applyButtonImage} variant="Black" size="ExtraSmall" onClick={handleApplyPromoCard} disabled={false} type="submit"/>} />
            </div>
            <div className="input__container-phoneNumber">
                <Input variant="phoneNumber"  placeholder="+7 ( ХХХ) ХХХ ХХ ХХ"  label="Телефон для смс уведомлений" labelClassName="phoneNumberLabel" id="phoneNumber" type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </div>
        </div>
  );
};

export default HomePage;
