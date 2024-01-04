import express from "express";
import routes from './routes.js';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
