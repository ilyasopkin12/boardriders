import React from 'react';
import styles from './Input.module.scss';

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
    variant: 'bonusCard' | 'promoCard' | 'phoneNumber';
    placeholder: string;
    label: string;
    id: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
    value: string;
    description?: string;
    image?: string;
    questionMarkImage?: string;
    button?: React.ReactNode;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    onChange: (value: string) => void;
}

const Input: React.FC<IInputProps> = ({ variant, placeholder, label, id, type = 'text', value, description, image, questionMarkImage, button, labelClassName, labelStyle, onChange, ...rest}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onChange(value);
    }
    const labelClasses = labelClassName 
        ? `${styles.Label} ${labelClassName}` 
        : styles.Label;
    return (
        <div className={styles.InputContainer}>
            <div className={styles.ImageLabelContainer}>
                {image && <img src={image} alt={label} />}
                <label className={labelClasses} style={labelStyle} htmlFor={id}>{label}</label>
                {questionMarkImage && <img src={questionMarkImage} alt={label} className={styles.questionMarkImage} />}
            </div>
            <div className={styles.InputButtonContainer}>
                <input className={styles[variant]} placeholder={placeholder} id={id} type={type} value={value} onChange={handleChange} {...rest} />
                {button && button}
            </div>
            <p className={styles.Description}>{description}</p>
        </div>
    );
}

export { Input };