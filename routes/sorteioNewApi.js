const express = require("express");
const router = express.Router();
const mysql = require("../mysqlNewApi").pool;
//Visualiza nomes
router.get("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query("SELECT * FROM Botdesigner;", (error, resultado, field) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
     
      return res.status(200).send({ listaDeUsuarios: resultado });
    });
  });
});
// Posta nomes
router.post("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      "INSERT INTO Botdesigner (name, lastName, email, cpf, color, genre, birthDay, maritalStatus, phone, phone2) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [
        req.body.name,
        req.body.lastName,
        req.body.email,
        req.body.cpf,
        req.body.color,
        req.body.genre,
        req.body.birthDay,
        req.body.maritalStatus,
        req.body.phone,
        req.body.phone2,
      ],
      (error, resultado, field) => {
        conn.release();
        if (error) {
          return res.status(500).send({
            error: error,
            listaDeUsuarios: null,
          });
        }
        res.status(201).send({
          mensagem: "O participante foi inserido com sucesso.",
          id: resultado.insertId,
        });
      }
    );
  });
});


module.exports = router;
