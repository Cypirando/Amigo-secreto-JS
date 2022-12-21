const nodemailer = require("nodemailer");

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
  console.log("duplas=", duplas);
  duplas.forEach((item) => {
    mandaNomeEail(item[0].email,item[0].nome, item[1].nome);
  });
  return duplas;
}

function mandaNomeEail(destinatario,destinatarioNome, nome) {
  console.log("destiario pegou " + destinatario, "do " + nome);
  //TRANSPORTE
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "secretoamigo338@gmail.com",
        pass: "esnihkyhgvvjvhwd"
    }
  });

  //CONFIGURAÇÃO DO EMAIL
  let info = transport.sendMail({
    from: 'secretoamigo338@gmail.com', // sender address
    to: destinatario, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<body>
    <header>
    <h6>Para: ${destinatario}</h6>
    <h2>Botdesinger</h2>
    <h3>Sorteador de Amigo Secreto</h3>
    <p>Olá ${destinatarioNome} voce pegou <strong>${nome}</strong> no sorteio do amigo secreto! </p>
    </header>
    <footer>
       <h6>Feliz Natal</h6> 
    </footer>
    
</body>`, // html body
  });
}

module.exports = { sortearNomes };
