import React from 'react';
import styles from './Input.module.scss';
import icon from '@/assets/gift 3.svg';
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: 'bonusCard' | 'promoCard' | 'phoneNumber';
    placeholder: string;
    label: string;
    id: string;
    type: string;
}

const Input: React.FC<IInputProps> = ({ variant, placeholder, label, id, type, ...rest }) => {
    return (
        <div className={styles.InputContainer}>
            <div className={styles.InputIcon}>
                <img src={icon} alt={label} className={styles.InputIconImage} />
            </div>
            <label className={styles.Label} htmlFor={id}>{label}</label>
            <input className={styles[variant || '']} placeholder={placeholder} id={id} type={type} {...rest} />
        </div>
    );
}

export { Input };