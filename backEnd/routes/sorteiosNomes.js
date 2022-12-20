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
    mandaNomeEail(item[0].email, item[1].nome);
  });
  return duplas;
}

function mandaNomeEail(destinatario, nome) {
  console.log("destiario pegou " + destinatario, "do " + nome);
  //TRANSPORTE
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1970641b66c5eb",
      pass: "2a1e5cf8d05183",
    },
  });

  //CONFIGURAÇÃO DO EMAIL
  let info = transport.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: destinatario, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>${nome}?</b>`, // html body
  });
}

module.exports = { sortearNomes };
