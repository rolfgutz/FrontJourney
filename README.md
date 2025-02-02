FrontJourney
Este é um projeto front-end criado com React.js e TypeScript. O projeto foi configurado utilizando Vite para um ambiente de desenvolvimento rápido e eficiente, e Tailwind CSS para estilização. Além disso, Lucide React é usado para ícones.

Tecnologias Utilizadas
React.js: Uma biblioteca JavaScript para construir interfaces de usuário.
TypeScript: Um superconjunto de JavaScript que adiciona tipagem estática ao código.
Vite: Um build tool para desenvolvimento front-end extremamente rápido.
Tailwind CSS: Um framework CSS utilitário para estilização rápida e fácil.
Lucide React: Um conjunto de ícones open-source para React.

Instalação
Siga os passos abaixo para configurar o projeto em sua máquina local.

1. Criar um Novo Projeto com Vite
Execute o comando abaixo para criar um novo projeto usando Vite:

npm create vite@latest

2. Instalar TypeScript
Adicione suporte ao TypeScript no projeto:
npm install -D typescript


3. Instalar Tailwind CSS
Configure Tailwind CSS no projeto:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

Adicione as configurações de Tailwind no arquivo tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans : 'Inter',
      }
    },
    boxShadow: {
      shape:
        "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
    },
    backgroundImage :{
      pattern: 'url(/bg.png)'      

    },
  },
  plugins: [],
}

Adicione as diretivas do Tailwind no arquivo src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

4. Instalar Lucide React
Adicione Lucide React para ícones:

npm i lucide-react

Uso
Scripts Disponíveis
No diretório do projeto, você pode executar:

npm run dev: Roda o app em modo de desenvolvimento.
npm run build: Compila o app para produção.
Estrutura do Projeto
A estrutura inicial do projeto é a seguinte:

my-project/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js

Configurando TypeScript
Para garantir que o TypeScript está configurado corretamente, você pode ajustar o arquivo tsconfig.json conforme necessário:

{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}

Contribuição
Sinta-se à vontade para fazer um fork deste projeto, criar uma branch, adicionar suas alterações e enviar um pull request.
