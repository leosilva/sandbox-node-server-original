const express = require("express");
const routes = require("./routes");
const cors = require("cors");

// iniciando o app
const app = express();

// permitindo o acesso à aplicação por qualquer ip, e não só localhost.
app.use(cors());

// permitindo troca de dados em formato json
app.use(express.json());

// usando rotas
app.use(routes);

// iniciando a aplicacao na porta 3000
app.listen(3000);
