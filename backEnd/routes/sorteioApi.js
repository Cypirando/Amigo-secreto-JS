const porta = 5000;
const cors = require("cors");
const express = require("express");
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

  resultadoDeQuemPegouQuem = api.sortearNomes(participantes);
  
  res.send(participantes);
});



/*=========>V3 --*/

// app.post("/token-sortados", (req, res, _next) => {

//   let user = req.body.user;
//   let password = req.body.password;
//     const token = jwt.sign({ texte:"oi" }, SECRET, { expiresIn: 300 });

//     return res.json({ auth: true, token });
// });


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

