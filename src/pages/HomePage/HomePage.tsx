import './HomePage.scss';
import { Button } from '@/shared';
import { Input } from '@/shared/ui/Input';
import { useState } from 'react';
const HomePage = () => {
    const [bonusCard, setBonusCard] = useState('');
    const handleBonusCardChange = (value: string) => {
        if ( /^\d*$/.test(value) && value.length <= 16) {
            setBonusCard(value);
        }
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
            <div className="input-container">
                <Input variant="bonusCard"  placeholder="Введите номер карты"  label="Бонусная карта" id="bonusCard" type="text" value={bonusCard} onChange={handleBonusCardChange} />
            </div>
        </div>
  );
};

export default HomePage;
