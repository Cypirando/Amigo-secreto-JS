const express = require("experss");
const app = express();

app.use((rq, res, next) => {
  res.status(200).send({
    messagem: "Ok, deu certo",
  });
});

module.exports = app;
