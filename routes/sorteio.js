const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;
//Visualiza nomes
router.get("/", (req, res, next) => {
  // res.status(200).send({
  //   mensagem: "Detalhe do Sorteios.",
  // });
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query("SELECT * FROM usuarios;", (error, resultado, field) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
      return res.status(200).send({ listaDeUsuarios: resultado });
    });
  });
});
//Posta nomes
router.post("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "INSERT INTO usuarios (nome,email) VALUES (?,?)",
      [req.body.nome, req.body.email],
      (error, resultado, field) => {
        conn.release();
        if (error) {
          return res.send(500).send({
            error: error,
            listaDeUsuarios: null,
          });
        }
        res.status(201).send({
          mensagem: "O participante foi inserido com sucesso.",
          id_user: resultado.insertId,
        });
      }
    );
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
