import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import background from "../../assets/overwatchbackground.jpeg";
import logo from "../../assets/overwatch2logovsign.png";
import logoText from "../../assets/Overwatch2logotext.png";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [verificarLogin, setVerificarLogin] = useState(false);
  const [loginValido, setLoginValido] = useState(false);
  const [tentouLogin, setTentouLogin] = useState(false);

  const mostrarErro =
    tentouLogin &&
    !loginValido;

  const mostrarSucesso =
    tentouLogin &&
    loginValido;

  useEffect(() => {

    if (verificarLogin) {

      if (email === "gabriel" && senha === "123456789") {
        setLoginValido(true);
      } else {
        setLoginValido(false);
      }

      setVerificarLogin(false);
    }

  }, [verificarLogin, email, senha]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <div className={styles.loginBox}>

        <img
          src={logo}
          alt="Overwatch Logo"
          className={styles.logo}
        />

        <img
          src={logoText}
          alt="Overwatch Text"
          className={styles.logoText}
        />

        <input
          className={styles.input}
          type="text"
          placeholder="Email or Phone"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        {mostrarErro && (
          <p className={styles.erro}>
            Email ou senha incorretos.
          </p>
        )}

        {mostrarSucesso && (
          <p className={styles.sucesso}>
            Login realizado com sucesso!
          </p>
        )}

        <button
          className={styles.button}
          onClick={() => {
            setTentouLogin(true);
            setVerificarLogin(true);
          }}
        >
          LOGIN
        </button>

      </div>
    </div>
  );
}

export default Login;