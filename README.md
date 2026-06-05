Overwatch Login Clone (React)

Este projeto é um clone da tela de login do jogo Overwatch, desenvolvido com React como parte de um trabalho acadêmico. O objetivo é aplicar conceitos fundamentais de React como gerenciamento de estado, efeitos colaterais, componentes funcionais e estilização com CSS Modules.

Tecnologias utilizadas
React
React Router DOM
JavaScript (ES6+)
CSS Modules
HTML5 Audio API

Funcionalidades
Tela de login inspirada no Overwatch
Controle de estado com useState (email e senha)
Validação de login utilizando useEffect
Sistema de gatilho de autenticação via estado
Navegação entre páginas com React Router
Reprodução de música ambiente no login e no main
Transição de áudio com fade in e fade out
Controle de volume dinâmico entre telas
Estilização completa com CSS Modules
Fonte personalizada do Overwatch aplicada globalmente
🎧 Sistema de áudio

O projeto conta com um sistema de áudio imersivo:

Música de login inicia ao interagir com os inputs
Música principal é preparada em segundo plano
Transição suave entre músicas usando:
Fade In
Fade Out
Controle de volume para melhorar a experiência do usuário
🧠 Lógica do login

O fluxo de autenticação segue a lógica exigida no projeto:

O usuário clica no botão de login
Uma variável de estado é alterada (dispararLogin)
O useEffect detecta a mudança
A validação do login e senha é executada automaticamente
Se estiver correto, o usuário é redirecionado para a página principal
Caso contrário, uma mensagem de erro é exibida
🎨 Estilização
CSS Modules para escopo isolado de estilos
Fonte personalizada inspirada no Overwatch
Layout responsivo básico
Interface baseada no design original do jogo
📁 Estrutura do projeto
src/
 ├── assets/
 │    ├── fonts/
 │    ├── images/
 │    └── audio/
 ├── components/
 ├── paginas/
 │    ├── Login/
 │    └── Main/
 ├── App.jsx
 └── main.jsx

Isso garante transições suaves entre músicas.

como rodar o projeto
npm install
npm run dev

✔ useState para login e senha
✔ useEffect para validação do login
✔ botão que altera variável de estado
✔ CSS Modules obrigatório
✔ entrega via Git com imagem base do layout


Nesse projeto eu pratiquei

Manipulação de estado no React
Uso de efeitos colaterais com useEffect
Organização de componentes
Estilização modular
Controle de mídia (áudio)
Boas práticas de estrutura de projeto e claro aqui  a imagem de referencia 

<img width="589" height="390" alt="Captura de tela 2026-05-29 230849" src="https://github.com/user-attachments/assets/9ae71be0-4a74-45f7-8fb1-2b108d679818" />

👨‍💻 Autor

Desenvolvido por Gabriel (projeto acadêmico)
