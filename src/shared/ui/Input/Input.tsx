import React from 'react';
import styles from './Input.module.scss';

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
    variant: 'bonusCard' | 'promoCard' | 'phoneNumber';
    placeholder: string;
    label: string;
    id: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
    value: string;
    onChange: (value: string) => void;
}

const Input: React.FC<IInputProps> = ({ variant, placeholder, label, id, type = 'text', value, onChange, ...rest }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onChange(value);
    }
    return (
        <div className={styles.InputContainer}>
            <label className={styles.Label} htmlFor={id}>{label}</label>
            <input className={styles[variant]} placeholder={placeholder} id={id} type={type} value={value} onChange={handleChange} {...rest} />
        </div>
    );
}

export { Input };