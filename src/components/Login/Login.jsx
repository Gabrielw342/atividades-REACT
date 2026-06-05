import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./Login.module.css";
import background from "../../assets/overwatchbackground.jpeg";
import logo from "../../assets/overwatch2logovsign.png";
import logoText from "../../assets/Overwatch2logotext.png";

import loginMusic from "../../assets/overwatchlogin.m4a";
import mainMusic from "../../assets/overwatchmain.m4a";

let audioLogin = null;
let audioMain = null;

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  const iniciarMusica = () => {
   
    if (window.__audioStarted) return;
    window.__audioStarted = true;

  
    audioLogin = new Audio(loginMusic);
    audioLogin.loop = true;
    audioLogin.volume = 0.8;
    audioLogin.play();

    audioMain = new Audio(mainMusic);
    audioMain.loop = true;
    audioMain.volume = 0;
    audioMain.play();
  };

  const fazerLogin = () => {
    setCarregando(true);

    if (email === "gabriel" && senha === "123456789") {
      setTimeout(() => {
        if (audioLogin) {
          audioLogin.pause();
          audioLogin.currentTime = 0;
        }

        if (audioMain) {
          audioMain.volume = 1;
        }

        navigate("/main");
      }, 2000);
    } else {
      setCarregando(false);
      alert("Login inválido");
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.loginBox}>
        <img src={logo} className={styles.logo} />
        <img src={logoText} className={styles.logoText} />

        <input
          className={styles.input}
          type="text"
          placeholder="Email"
          value={email}
          onFocus={iniciarMusica}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={senha}
          onFocus={iniciarMusica}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          className={styles.button}
          disabled={carregando}
          onClick={fazerLogin}
        >
          {carregando ? "CONECTANDO..." : "LOGIN"}
        </button>
      </div>
    </div>
  );
}

export default Login;