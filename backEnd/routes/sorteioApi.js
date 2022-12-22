const porta = 5000;
const cors = require("cors");
const express = require("express");
// const ejs = require("ejs");
// var token = jwt.sign({ foo: "bar" }, "shhhhh");
const app = express();
const api = require("./sorteiosNomes");
const SECRET = "botdesigner";
const jwt = require("jsonwebtoken");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

/*=========>V2 --*/
let resultadoDeQuemPegouQuem
app.post("/nomes-sortados", (req, res, _next) => {
  let participantes = req.body.nomes;
  // const token = jwt.sign({ texte:"veioaqui" }, SECRET, { expiresIn: 300 });

  resultadoDeQuemPegouQuem = api.sortearNomes(participantes);
  
  res.send(resultadoDeQuemPegouQuem);
  //  res.send({ auth: true, token });
});



/*=========>V3 --*/

app.post("/token-sortados", (req, res, _next) => {

  let user = req.body.user;
  let password = req.body.password;
  // if (user === "luiz" && password == "123") {
    const token = jwt.sign({ texte:"oi" }, SECRET, { expiresIn: 300 });

    return res.json({ auth: true, token });
//   }
//   res.status(401).end();
//   res.send("OK.");
});

// function veryfyJwt(req,res, next){
//   const token = req.headers['x-access-token'];
//   jwt.verify(token,SECRET, async (err, decoded) => {
//     if(err) return  res.status(401).end();

//     req.userId = decoded.userId
//     next()
//   })
// }



app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});











// app.listen(porta, () => {
//   console.log(`Servidor executando na porta ${porta}`);
// });

// const crypto = require('crypto');

// const header = JSON.stringify({
//     'alg': 'HS256',
//     'typ': 'JWT'
// });

// const payload = JSON.stringify({
//     'email': 'aylan@boscarino.com',
//     'password': 'ya0gsqhy4wzvuvb4'
// });

// const base64Header = Buffer.from(header).toString('base64').replace(/=/g, '');
// const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '');
// const secret = 'my-custom-secret';

// const data = base64Header + '.' + base64Payload;

// const signature = crypto
//     .createHmac('sha256', secret)
//     .update(data)
//     .digest('base64');

// const signatureUrl = signature
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//     .replace(/=/g, '')

// console.log(signatureUrl);
