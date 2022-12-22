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
  // console.log("destiario pegou " + destinatario, "do " + nome);
  //TRANSPORTE
  const token = jwt.sign({ texte:remetenteNome}, SECRET, { expiresIn: 300 });
  //  res.send({ auth: true, token });
// let mensagem = { auth: true, token }
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
    text: "Hello world?", // plain text body
    html: `<body>
    <header>
    <h6>Para: ${destinatario}</h6>
    <h2>Botdesigner</h2>
    <h3>Sorteador de Amigo Secreto</h3>
    <p>Olá ${destinatarioNome} voce pegou <strong>${token}</strong> no sorteio do amigo secreto! </p>
    </header>
    <footer>
       <h6>Feliz Natal</h6> 
    </footer>
    
</body>`, // html body
  });
}

module.exports = { sortearNomes, mandaNomeEail };
