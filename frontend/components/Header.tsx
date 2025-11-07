import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children && <p className={styles.subtitle}>{children}</p>}
      </div>
    </div>
  );
}

