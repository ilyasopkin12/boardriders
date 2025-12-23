import styles from './Button.module.scss';
import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  image?: string;
  variant: 'black' | 'red' | 'redBorder' | 'blackBorder' | 'loyaltyProgram';
  size: 'small' | 'large' | 'extraSmall' | 'loyaltyProgram';
}
export const Button: React.FC<IButtonProps> = ({title, onClick, disabled, variant, size, className, image, type = 'button'}) => {
  return (
    <button 
      className={`${styles[variant]} ${styles[size]} ${className || ''}`} 
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {image && <img src={image} alt={title} className={styles.image} />}
      {title}
    </button>
  );
};