const express = require("express");
const router = express.Router();
//Visualiza nomes
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Detalhe do Sorteios.",
  });
});
//Posta nomes
router.post("/", (req, res, next) => {
    const user = {
        nome: req.body.nome,
        email: req.body.email
    }
    res.status(201).send({
        mensagem: "O sorteio foi criado.",
        usuarioCriado: user
      });
});
//Altera nomes
router.patch("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o PATCH dentro da rota de Sorteios.",
      });
});
// Exclui nomes
router.delete("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o DELETE dentro da rota de Sorteios.",
      });
});

module.exports = router;