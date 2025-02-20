import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

export default function Button({ children, isActive, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={isActive ? `${styles['button']} ${styles['active']}` : styles['button']}
    >
      {children}
    </button>
  );
}
