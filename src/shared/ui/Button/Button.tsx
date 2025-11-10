import React from 'react';
import styles from './Button.module.scss';
interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => (
  <button className={styles.button}>{children}</button>
);

export { Button };
