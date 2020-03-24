const express = require('express');

const routes = express.Router();

routes.post('/ongs', (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  console.log(data);

  return res.json();
});

module.exports = routes;