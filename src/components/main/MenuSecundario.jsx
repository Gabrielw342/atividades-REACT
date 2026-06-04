import styles from "./MenuSecundario.module.css";

function MenuSecundario({ texto }) {
  return (
    <p className={styles.item}>
      {texto}
    </p>
  );
}

export default MenuSecundario;