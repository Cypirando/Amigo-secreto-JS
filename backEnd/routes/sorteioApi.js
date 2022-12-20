
const porta = 5000;
const cors = require("cors");
const express = require("express");
const app = express();
const api = require("./sorteios");
corsApp();
useApp();
exxpresApp();
postApp();
message();

function corsApp() {
  app.use(cors());
}

function useApp() {
  app.use(
    express.urlencoded({
      extended: true,
    })
    );
  }
  
  function exxpresApp() {
    app.use(express.json());
  }
  
  function postApp() {
    app.post("/nomes-sortados", (req, res, _next) => {
      let participantes = req.body.nomes;
      let resultado = api.sortearNomes(participantes);
      res.send(resultado);
    });
  }
  
  function message() {
    app.listen(porta, () => {
      console.log(`Servidor executando na porta ${porta}`);
    });
  }


