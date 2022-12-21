/* -------------------------------- */
const rota = "http://localhost:5000/nomes-sortados";
/* -------------------------------- */
async function getApi(nomes) {
  try {
    let header = new Headers({
      "Content-Type": "application/json",
    });
    let request = await fetch(rota, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ nomes }),
    });
    request
      .json()
      .then((sorteados) => {
        // console.log(sorteados);
        // let printTela = document.getElementById("lista-one");
        // printTela.innerHTML = "";
        // printTela.innerHTML += sorteados.map((i) => {
        //   console.log("i", i);
        //   return `<div class="caixa-box name-2"><h3>O sorteio foi enviado no Email.</h3></div>`;
        // });
      })
      .catch((err) => console.log("err=", err));
  } catch (error) {
    console.log("eror");
  }
}
async function imprimirNaTela() {
  await getApi(participantes);
}
/* -------------------------------- */
let nomeDoSorteio = document.getElementById("input-one");
let printNomeDoSorteio = document.getElementById("nome-sorteio");
let btnAncancar = document.getElementById("btn-avancar");
btnAncancar.addEventListener("click", () => {
  document.getElementById("meio").style.display = "grid";
  document.getElementById("inicio").style.display = "none";
  printNomeDoSorteio.innerHTML = nomeDoSorteio.value;
  limparInputOne();
});
function limparInputOne() {
  let input = document.getElementById("input-one");
  input.value = "";
}
/* -------------------------------- */
let btnAdicionar = document.querySelector("#adicionar");
let participantes = [];
let cadastrados = [];
let linhas = 0;
btnAdicionar.addEventListener("click", () => {
  let input = document.querySelector("#input-dados").value;
  let imputEmail = document.querySelector("#input-email").value
  // function validateEmail(imputEmail) {
  //   var re = /\S+@\S+\.\S+/;
  //   re.test(imputEmail)
  //   return true;
  // }
  if (input !== "" && participantes.indexOf(input) == -1 && imputEmail!== "" &&) {
    participantes.push({ nome: input, email: imputEmail });

    cadastrados.push({ name: input, id: cadastrados.length });

    renderizar();
    limparInput();
    console.log("participantes", participantes);
    console.log("cadastrados", cadastrados);
  } else if (participantes.indexOf(input) != -1) {
    alert("O nome já existe");
  } else {
    alert("Insira o Nome e Email dos Participantes");
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btnAdicionar.click();
  }
});
function limparInput() {
  let limpaInput = document.getElementById("input-dados");
  let LimparEmail = document.getElementById("input-email")
  limpaInput.value = "";
  LimparEmail.value = "";
  limpaInput.focus();
  // LimparEmail.focus();
}
/* -------------------------------- */
let quadroLista = document.querySelector("#quadro-lista");
function renderizar() {
  quadroLista.innerHTML = "";
  quadroLista.innerHTML += participantes
    .map(
      (e, index) => `
    <div class="nomes-sorteio">
    ${e.nome} <input type="button" onclick="excuir(${index})" name="botao-ok" value="X"> <br /><br />
    </div>
    `
    )
    .join("");
}
function excuir(a) {
  participantes.splice(a, 1);
  renderizar();
}
/* -------------------------------- */
let btnSortear = document.querySelector("#btn-sortear");
btnSortear.addEventListener("click", () => {
  if (participantes.length >= 2) {
    imprimirNaTela();
    document.getElementById("meio").style.display = "none";
    document.getElementById("final").style.display = "grid";
  } else if (participantes.length == 1) {
    alert("[ERRO] Não dar para jogar sozinho");
  } else {
    alert("[ERRO] Insira os Participantes");
  }
});
/* -------------------------------- */
const lerArq = document.querySelector('input[type="file"]');
lerArq.addEventListener(
  "change",
  () => {
    console.log(lerArq.files);
    const reader = new FileReader();
    reader.onload = () => {
      const lines = reader.result.split("\r\n").map((line) => line);
      lines.forEach((nomes) => participantes.push(nomes));
      linhas = lines.length;
      document.getElementById("modal").style.display = "grid";
      renderizar();
    };
    reader.readAsText(lerArq.files[0]);
  },
  false
);
/* -------------------------------- */
let voltarInicio = document.getElementById("btn-atualizar");
voltarInicio.addEventListener("click", () => {
  window.location.reload();
});
/* --------------16/12/2022------------------ */
