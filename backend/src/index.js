const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

/*
  Definição de endpoints
*/
app.get('/api', (req, res) => {
  res.json({message: 'Deu tudo certinho!'});
});

/*
  Definição de portas
*/
app.listen(PORT, () => {
    console.log(`O app esta rodando na porta: ${PORT}`);
});