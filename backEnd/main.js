function embaralhaNomes(nome) {
  nome.map((e, i) => {
    let aux = Math.floor(Math.random() * i+1);
    [nome[i], nome[aux]] = [nome[aux], nome[i]];
  });

  return nome;
}
function sorteiaNomes(nome) {
  let posicaoTrocada = embaralhaNomes(nome);
  let duplas = [];
  posicaoTrocada.map((e, i) => {
    duplas.push([nome[i], nome[i != nome.length-1 ? i+1 : 0]]);
  });
  return duplas;
}

module.exports = { sorteiaNomes };
