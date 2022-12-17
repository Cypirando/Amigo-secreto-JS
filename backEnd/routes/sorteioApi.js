const porta = 5000;
const cors = require("cors");
const express = require("express");
const app = express();

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
      let resultado = sortearNomes(participantes);
      res.send(resultado);
    });
  }
  
  function message() {
    app.listen(porta, () => {
      console.log(`Servidor executando na porta ${porta}`);
    });
  }

  /*-----Faz o sorteio------*/

function embaralhar(teste) {
  teste.map((_element, index) => {
    let aux = Math.floor(Math.random() * (index + 1));
    [teste[index], teste[aux]] = [teste[aux], teste[index]];
  });
  return teste;
}

function sortearNomes(teste) {
  console.log("sortear=", teste);
  let mudaPocicao = embaralhar(teste);
  let duplas = [];
  mudaPocicao.map((_element, index) => {
    duplas.push([
      teste[index],
      teste[index != teste.length - 1 ? index + 1 : 0],
    ]);
  });
  return duplas;
}

