import React from 'react';
import styles from './Input.module.scss';

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    label?: React.ReactNode;
    id?: string;
    value: string;
    description?: string;
    containerClassName?: string;
    sendButton?: React.ReactNode;
    onChange: (value: string) => void;
    onSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(({ label, id, value, description, containerClassName, sendButton, onChange, onSubmit, ...rest}, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const descriptionId = `${inputId}-description`;

    return (
        <div className= {`${styles.inputContainer} ${containerClassName}`}>
            <div className={styles.labelContainer}>
                <label htmlFor={inputId}>{label}</label>
            </div>
            <div className={styles.inputButtonContainer}>
                <input ref={ref} aria-describedby={descriptionId} id={inputId} value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
                {sendButton && sendButton}
            </div>
            {description && <p id={descriptionId} className={styles.description}>{description}</p>}
        </div>
    );
});
