let nomesDoArray = [];
let aux = []

// teste(resultado);
function extrairNomes(resultado) {
  resultado.map((nomes) => {
    nomesDoArray= nomes.nome;
    aux.push(nomesDoArray)
    sortearNomes(aux)
    return nomesDoArray;
  });
}
    // console.log(nomesDoArray);
    // console.log(aux);

function embaralhar(teste) {
  teste.map((_element, index) => {
    let aux = Math.floor(Math.random() * (index + 1));
    [teste[index], teste[aux]] = [teste[aux], teste[index]];
  });
  return teste;
}

function sortearNomes(teste) {
  // console.log("sortear=", teste);
  let mudaPocicao = embaralhar(teste);
  let duplas = [];
  mudaPocicao.map((_element, index) => {
    duplas.push([
      teste[index],
      teste[index != teste.length - 1 ? index + 1 : 0],
    ]);
  });
  console.log("duplas=", duplas);
  return duplas;
}


module.exports = { extrairNomes };


