/* -------------ANIMAÇÕES ------*/
const slidePage = document.querySelector(".slidepage");
const avancarBtn = document.querySelector(".nextbtn");
const Voltar = document.querySelector(".prev-1");
const sortear = document.querySelector(".next-1");
const prevBtnSec2 = document.querySelector(".prev-2");
const nextBtnSec2 = document.querySelector(".next-2");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
/******************************************** */
/**ROTA */
/* -------------------------------- */
const rota = "http://localhost:5000/nomes-sortados";
/* -------------------------------- */
async function getApi(nomes) {
  try {
    let header = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    let request = await fetch(rota, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ nomes }),
    });
    console.log(request)
    request
      .json()
      .then((sorteados) => {
        console.log(sorteados)
        // let printTela = document.getElementById("lista-one");
        // printTela.innerHTML = "";
        // printTela.innerHTML += Object.values(sorteados)
        //   .map(
        //     (i) =>
        //       console.log(
        //         "i",
        //         i
        //       )`<div class="caixa-box name-2"><h3>${i.nome}</h3></div>`
        //   )
        //   .join(" ");
      })
      .catch();
  } catch (error) {
    console.log("eror");
  }
}
async function imprimirNaTela() {
  await getApi(participantes);
}
/* -------------------------------- */
let max = 4;
let current = 1;

let nomeDoSorteio = document.getElementById("input-one");
let printNomeDoSorteio = document.getElementById("nome-sorteio");

avancarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;

  printNomeDoSorteio.innerHTML = nomeDoSorteio.value;
  limparInputOne();
});

sortear.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

nextBtnSec2.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

Voltar.addEventListener("click", (e) => {
  e.preventDefault();

  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnSec2.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
/********************************************************* */

/**limpar Inputs */
function limparInputOne() {
  let input = document.getElementById("input-one");
  input.value = "";
}
/********************************************************* */
function limparInput() {
  let limpaInputNome = document.getElementById("input-dados");
  limpaInputNome.value = "";
  limpaInputNome.focus();
}
/******************************************************* */
function limparInputEmail() {
  let limpaInputEmail = document.getElementById("input-email");
  limpaInputEmail.value = "";
  limpaInputEmail.focus();
}
/******************************************************* */
/**Excluir */

function excuir(a) {
  participantes.splice(a, 1);
  renderizar();
}
/******************************************************** */

const btnAdicionar = document.querySelector("#adicionar");
let participantes = [];
let cadastrados = [];
let linhas = 0;

console.log(participantes);

btnAdicionar.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.querySelector("#input-dados").value;
  let inputemail = document.querySelector("#input-email").value;

  if (input !== "" && participantes.indexOf(input) == -1) {
    participantes.push({ nome: input, email: inputemail });

    cadastrados.push({ name: input, id: cadastrados.length });

    renderizar();
    limparInput();
    limparInputEmail();
    console.log("participantes", participantes);
    console.log("cadastrados", cadastrados);
  } else if (participantes.indexOf(input) != -1) {
    alert("O nome já existe");
  } else {
    alert("Insira o Nome dos Participantes");
  }
});

function renderizar() {
  let quadroLista = document.querySelector("#quadro-lista");
  quadroLista.innerHTML = "";
  quadroLista.innerHTML += participantes
    .map(
      (e, index) => `
    <div class="nomes-sorteio"> 
    ${e.nome} : ${e.email} <input type="button" onclick="excuir(${index})" name="botao-ok" value="X"> <br /><br />
    </div>
    `
    )
    .join("");
}
const btnSortear = document.getElementById("btn-sortear");
btnSortear.addEventListener("click", () => {
  console.log("oi cliquei");
  imprimirNaTela(participantes)
});
