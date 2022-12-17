const porta = 5000;

const cors = require("cors");
const express = require("express");

const app = express();
// const sorteioApi = require("./sorteioApi");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.post("/nomes-sortados", (req, res, next) => {
  let participantes = req.body.nomes;
  let resultado = sortearNomes(participantes);
  res.send(resultado);
});
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});



/**dddddddddddddddddddddddd */
function embaralhar(teste) {
  teste.map((element, index) => {
    let aux = Math.floor(Math.random() * (index + 1));
    [teste[index], teste[aux]] = [teste[aux], teste[index]];
  });
  return teste;
}

function sortearNomes(teste) {
  console.log("sortear=", teste);
  let mudaPocicao = embaralhar(teste);
  let duplas = [];
  mudaPocicao.map((element, index) => {
    duplas.push([
      teste[index],
      teste[index != teste.length - 1 ? index + 1 : 0],
    ]);
  });
  return duplas;
}


/**[[[[[[[[[[[[[[[[[teste]]]]]]]]]]]]]]]]] */

function embaralhar(teste) {
  teste.map((element, index) => {
    let aux = Math.floor(Math.random() * (index + 1));
    [teste[index], teste[aux]] = [teste[aux], teste[index]];
  });
  return teste;
}

function sortearNomes(teste) {
  console.log("sortear=", teste);
  let mudaPocicao = embaralhar(teste);
  let duplas = [];
  mudaPocicao.map((element, index) => {
    duplas.push([
      teste[index],
      teste[index != teste.length - 1 ? index + 1 : 0],
    ]);
  });
  return duplas;
}

// module.exports = { sortearNomes };


