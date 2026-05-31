import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import background from "../../assets/overwatchbackground.jpeg";
import logo from "../../assets/overwatch2logovsign.png";
import logoText from "../../assets/Overwatch2logotext.png";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const loginValido = email === "admin" && senha === "123";

const mostrarErro =
  email !== "" &&
  senha !== "" &&
  !loginValido;

  useEffect(() => {
    console.log("Email ou senha alterados");
  }, [email, senha]);

  return (
    <div
  className={styles.container}
  style={{
    backgroundImage: `url(${background})`
  }}
>
      <img   
      src={logo}
      alt="Overwatch 2 logo"
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

      <p>Login válido: {loginValido ? "Sim" : "Não"}</p>

{mostrarErro && (
  <p>Email ou senha incorretos. Verifique seus dados e tente novamente.</p>
)}


<button className={styles.button}>
  {loginValido ? "ENTRAR" : "LOGIN"}
</button>
    </div>
  );
}

export default Login;