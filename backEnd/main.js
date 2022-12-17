
function embaralhar(teste) {
  teste.map((element, index) => {
    let aux = Math.floor(Math.random() * (index + 1));
    [teste[index], teste[aux]] = [teste[aux], teste[index]];
  });
  return teste;
}

function sortear(teste) {
    // console.log("sortear=", teste)
  let embaralhado =  embaralhar(teste);
  let sorteados = [];
  embaralhado.map((element, index) => {
    sorteados.push([
      teste[index],
      teste[index != teste.length - 1 ? index + 1 : 0],
    ]);
  });
  return sorteados;
}

module.exports = { sortear };
