# README

## API de Sintomas Médicos

Este projeto é uma aplicação simples em Express.js que fornece informações sobre várias doenças e seus sintomas associados. Ele serve como uma API que permite aos usuários consultar uma lista de doenças, cada uma com seus respectivos sintomas.

### Funcionalidades

- Fornece uma lista de doenças com seus sintomas.
- Servidor Express.js simples rodando na porta 3000.
- Pode ser acessado através do endpoint `/doencas`, que retorna os dados em formato JSON.

### Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/JorgeJMarttins/doencas-e-sintomas.git
   ```

2. **Acesse o diretório do projeto**:

   ```bash
   cd doencas-e-sintomas
   ```

3. **Instale as dependências**:

   Se você não tiver o `npm` instalado, primeiro instale o Node.js. Depois, execute:

   ```bash
   npm install
   ```

### Uso

1. **Inicie o servidor**:

   Após instalar as dependências, inicie o servidor Express com o seguinte comando:

   ```bash
   node index.js
   ```

   O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

2. **Acesse o endpoint**:

   Para visualizar a lista de doenças e seus sintomas, acesse a URL:

   ```
   http://localhost:3000/doencas
   ```

   A resposta será um JSON com os dados de doenças e sintomas.

### Repositório

Você pode acessar o código-fonte no GitHub: [doencas-e-sintomas](https://github.com/JorgeJMarttins/doencas-e-sintomas/blob/main/index.js).
```
