const porta = 5000;

const cors = require("cors");
const express = require("express");
const app = express();
const sorteioApi = require("./sorteioApi");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.post("/nomes-sortados", (req, res, next) => {
  let participantes = req.body.nomes;
  let resultado = sorteioApi.sorteiaNomes(participantes);
  res.send(resultado);
});
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
