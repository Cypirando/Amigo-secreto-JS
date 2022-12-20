const porta = 5000;
const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const app = express();
const api = require("./sorteiosNomes");

corsApp();
useApp();
exxpresApp();
postApp();
getEmail();
message();

function corsApp() {
  app.use(cors());
}

function useApp() {
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
}

function exxpresApp() {
  app.use(express.json());
}

function postApp() {
  app.post("/nomes-sortados", (req, res, _next) => {
    let participantes = req.body.nomes;
    
    console.log("part.api",participantes)
    let resultado = api.extrairNomes(participantes);
    let fabio = api.sortearNomes(resultado)
    console.log("resul.api",resultado)
    console.log("resul.fabio",fabio)

    res.send(fabio);
  });
}

function getEmail() {
  app.get("/enviar-email", async (_req, res) => {
    ejs.renderFile(__dirname + "/email.ejs", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let transport = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "1970641b66c5eb",

            pass: "2a1e5cf8d05183",
          },
        });

        let mailTranporter = {
          from: '"Fred Foo 👻" <foo@example.com>',
          to: "bar@example.com, baz@example.com",
          subject: "Hello ✔",
          html: data, // html body
        };

        transport.sendMail(mailTranporter, () => {
          if (err) {
            console.log(err);
          } else {
            console.log("Mensagem enviada.");
          }
        });
      }
    });
    res.send("Enviou");
  });
}

function message() {
  app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
  });
}
