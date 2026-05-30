import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>

      <img alt="Overwatch Logo" />

      <input
      className={styles.input}
        type="text"
        placeholder="Email or Phone"
      />

      <input
      className={styles.input}
        type="password"
        placeholder="Password"
      />

      <button className={styles.input}>
        LOGIN
      </button>
    </div>
  );
}

export default Login;