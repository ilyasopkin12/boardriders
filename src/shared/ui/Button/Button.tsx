import styles from './Button.module.scss';
import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  variant: 'Black' | 'Red' | 'RedBorder' | 'BlackBorder';
  size: 'Small' | 'Large';
}
const Button: React.FC<IButtonProps> = ({title, onClick, disabled, variant, size, className}) => {
  return (
    <button 
      className={`${styles[variant]} ${styles[size]} ${className || ''}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
export { Button };