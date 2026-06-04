import styles from "./MenuItem.module.css";

function MenuItem({ texto }) {
  return (
    <h1 className={styles.item}>
      {texto}
    </h1>
  );
}

export default MenuItem;