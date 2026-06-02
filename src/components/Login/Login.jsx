import { useState, useEffect } from "react";

import {
  Container,
  LoginBox,
  Logo,
  LogoText, //agora entendi porque o professor nao gosta essa metodo parece horrivel
  Input,
  Button,
  Erro,
  Sucesso,
} from "./Login.styles";

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
      if (
        email === "gabriel" &&
        senha === "123456789"
      ) {
        setLoginValido(true);
      } else {
        setLoginValido(false);
      }

      setVerificarLogin(false);
    }
  }, [verificarLogin, email, senha]);

  return (
    <Container
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <LoginBox>
        <Logo
          src={logo}
          alt="Overwatch Logo"
        />

        <LogoText
          src={logoText}
          alt="Overwatch Text"
        />

        <Input
          type="text"
          placeholder="Email or Phone"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <Input
          type="password"
          placeholder="Password"
          value={senha}
          onChange={(event) =>
            setSenha(event.target.value)
          }
        />

        {mostrarErro && (
          <Erro>
            Email ou senha incorretos.
          </Erro>
        )}

        {mostrarSucesso && (
          <Sucesso>
            Login realizado com sucesso!
          </Sucesso>
        )}

        <Button
          onClick={() => {
            setTentouLogin(true);
            setVerificarLogin(true);
          }}
        >
          LOGIN
        </Button>
      </LoginBox>
    </Container>
  );
}

export default Login;