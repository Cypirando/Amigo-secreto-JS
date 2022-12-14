document.getElementById("inicio").style.display = "flex";

/*infos de get e post */

let nomeDoSorteio = document.getElementById("input-one");
let printNomeDoSorteio = document.getElementById("nome-sorteio");
let btnAncancar = document.getElementById("btn-avancar");

//Nome do Sorteio
btnAncancar.addEventListener("click", () => {
  // document.getElementById("meio").style.display = "grid";
  // document.getElementById("inicio").style.display = "none";

  printNomeDoSorteio.innerHTML = nomeDoSorteio.value;
  limparInputOne();
});

//Sorteio
let btnAdicionar = document.querySelector("#adicionar");
let btnSortear = document.querySelector("#btn-sortear");

let participantes = [];
let cadastrados = [];

btnAdicionar.addEventListener("click", () => {
  let input = document.querySelector("#input-dados").value;
  if (input !== "") {
    participantes.push(input);
    cadastrados.push({ name: input, id: cadastrados.length });
    renderizar();
    limparInput();
    console.log(participantes);
    console.log("cadastrados", cadastrados);
  } else {
    alert("[ERRO] Insira o Nome dos Participantes");
  }
});
function limparInputOne() {
  let input = document.getElementById("input-one");
  input.value = "";
}
function limparInput() {
  let input = document.getElementById("input-dados");
  input.value = "";
}

//Render
let quadroLista = document.querySelector("#quadro-lista");
function renderizar() {
  quadroLista.innerHTML = "";
  quadroLista.innerHTML += participantes
    .map((e,index) =>`
    <div class="nomes-sorteio">
    ${e} <input type="button" onclick="excuir(${index})" name="botao-ok" value="X"> <br /><br />
    </div>
    `)
    .join("");
}

// -------------------------
//renderizar arquivo txt
const input = document.querySelector('input[type="file"]');
let sp = document.querySelector("span");
input.addEventListener(
  "change",
  () => {
    console.log(input.files);
    const reader = new FileReader();
    reader.onload = () => {
      const lines = reader.result.split("\r\n").map((line) => line);
      console.log(lines);
      console.log(participantes);
      lines.forEach((nomes) => participantes.push(nomes));
      renderizar()
    };
    reader.readAsText(input.files[0]);

    // quadroLista.innerHTML = "";
    // quadroLista.innerHTML +=
    //   .map((e) => `${e.name} <br /><br />`)
    //   .join("");
  },
  false
);

// Embaralhar
function embaralhar(arr) {
  // Loop em todos os elementos
  // for (let i = arr.length - 1; i > 0; i--) {
  // }
  arr.forEach((a, i) => {
    // Escolhendo elemento aleatório
    const aux = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[aux]] = [arr[aux], arr[i]];
  });
  // Retornando array com aleatoriedade
  return arr;
}
btnSortear.addEventListener("click", () => {
  if (participantes.length >= 2) {
    renderSorteio();

    // document.getElementById("meio").style.display = "none";
    // document.getElementById("final").style.display = "grid";
  } else if (participantes.length == 1) {
    alert("[ERRO] Não dar para jogar sozinho");
  } else {
    alert("[ERRO] Insira os Participantes");
  }
});

function renderSorteio() {
  let listaOne = document.getElementById("lista-one");
  embaralhar(participantes);
  let sorteados = [];

  participantes.forEach((a, i) => {
    sorteados.push([
      participantes[i],
      participantes[i != participantes.length - 1 ? i + 1 : 0],
    ]);
  });

  // for (let i = 0; i < participantes.length; i++) {
  //   console.log(i)
  //   sorteados.push([
  //     participantes[i],
  //     participantes[i != participantes.length - 1 ? i + 1 : 0],
  //   ]);
  // }
  console.log("sorteados", sorteados);
  listaOne.innerHTML = "";
  listaOne.innerHTML += sorteados
    .map(
      (i) =>
        `<div class="caixa-box name-2"><h3>${i
          .toString()
          .replace(",", " <i>tirou<i/> ")}</h3></div>`
    )
    .join(" ");
}

let btnAtualizar = document.getElementById("btn-atualizar");

btnAtualizar.addEventListener("click", () => {
  window.location.reload();
});
function excuir(a) {
  participantes.splice(a,1)
  renderizar()
}