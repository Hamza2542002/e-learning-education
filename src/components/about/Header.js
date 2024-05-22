import styles from "./Header.module.css";
function Header({ title, content }) {
  return (
    <header className={"" + styles.header}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p className="text-muted">{content}</p>
      </div>
    </header>
  );
}

export default Header;
