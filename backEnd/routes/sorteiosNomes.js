const nodemailer = require("nodemailer");
const SECRET = "botdesigner";
const jwt = require("jsonwebtoken");

function embaralhar(teste) {
  teste.map((_element, index) => {
    let aux = Math.floor(Math.random() * (index + 1));
    [teste[index], teste[aux]] = [teste[aux], teste[index]];
  });
  return teste;
}

function sortearNomes(teste) {
  let mudaPocicao = embaralhar(teste);
  let duplas = [];
  mudaPocicao.map((_element, index) => {
    duplas.push([
      teste[index],
      teste[index != teste.length - 1 ? index + 1 : 0],
    ]);
  });
  // console.log("duplas=", duplas);
  duplas.forEach((item) => {
    console.log(item);
    mandaNomeEail(item[0].email, item[0].nome, item[1].nome);
  });
  return duplas;
}

function mandaNomeEail(destinatario, destinatarioNome, remetenteNome) {
  //TRANSPORTE
  const token = jwt.sign({ nome: remetenteNome }, SECRET, { expiresIn: 500 });
  console.log({ auth: true, token });
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "secretoamigo338@gmail.com",
      pass: "esnihkyhgvvjvhwd",
    },
  });

  //CONFIGURAÇÃO DO EMAIL
  let info = transport.sendMail({
    from: "secretoamigo338@gmail.com", // sender address
    to: destinatario, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello wld?or", // plain text body
    html: `<body>
    <header>
    <h6>Para: ${destinatario}</h6>
    <h2>Botdesigner</h2>
    <h3>Sorteador de Amigo Secreto</h3>
    <p>Olá ${destinatarioNome} você participou no sorteio do amigo secreto!</p>
    <a  href="http://127.0.0.1:5501/resultado.html?${token}">
        <button
          style="
            color: #fff;
            border: none;
            background-color: #428fdc;
            font-size: 10px;
            padding: 7px 11px;
            border-radius: 3px;
            cursor: pointer;
          "> Resultao </button>
      </a>
      <p>Para acessar o resultado do sorteio ultilize o Botão acima</p>
    </header>
    <footer>
       <h6>Feliz Natal</h6> 
    </footer>
    
</body>`, // html body
  });
}

module.exports = { sortearNomes, mandaNomeEail };
