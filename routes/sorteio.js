const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;
//Visualiza nomes
router.get("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query("SELECT * FROM usuarios;", (error, resultado, field) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
      // const response = {
      //   quantidade: resultado.length,
      //   usuarios: resultado.map((prod) => {
      //     return {
      //       user_id: prod.user_id,
      //       nome: prod.nome,
      //       email: prod.email
      //     };
      //   }),
      // };
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
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      `
      UPDATE usuarios
        SET nome     = ?,
            email    = ?
      WHERE user_id  = ?
      `,
      [req.body.nome, req.body.email, req.body.user_id],
      (error, resultado, field) => {
        conn.release();
        if (error) {
          return res.send(500).send({
            error: error,
            listaDeUsuarios: null,
          });
        }
        res.status(202).send({
          mensagem: "O participante foi alterado com sucesso.",
        });
      }
    );
  });
});
// Exclui nomes
router.delete("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      `DELETE from usuarios WHERE  user_id=? `,
      [req.body.user_id],
      (error, resultado, field) => {
        conn.release();
        if (error) {
          return res.send(500).send({
            error: error,
            listaDeUsuarios: null,
          });
        }
        res.status(202).send({
          mensagem: "O participante foi removido com sucesso.",
        });
      }
    );
  });
});

module.exports = router;
