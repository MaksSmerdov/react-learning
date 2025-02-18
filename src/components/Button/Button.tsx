import styles from './Button.module.scss';

interface ButtonType {
  children: any;
  isActive: any;
}

export default function Button({ children, isActive, ...props }: ButtonType) {
  return (
    <button {...props} className={isActive ? `${styles['button']} ${styles['active']}` : styles['button']}>
      {children}
    </button>
  );
}
