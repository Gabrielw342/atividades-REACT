import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginBox = styled.div`
  width: 370px;

  background: transparent;

  padding: 40px;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;
`;

export const Logo = styled.img`
  width: 140px;
  height: auto;

  margin-bottom: 10px;
`;

export const LogoText = styled.img`
  width: 300px;

  margin-top: -20px;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  width: 320px;
  padding: 12px;

  background: rgba(40, 40, 40, 0.8);

  color: white;

  border: none;
  border-radius: 4px;

  font-size: 16px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const Button = styled.button`
  width: 320px;
  padding: 10px;

  background-color: #f28c28;

  color: white;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  font-weight: bold;
  font-size: 18px;

  transition: 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Erro = styled.p`
  color: #ff6b6b;
  font-size: 14px;
  margin: 0;
`;

export const Sucesso = styled.p`
  color: #4caf50;
  font-size: 14px;
  margin: 0;
`;