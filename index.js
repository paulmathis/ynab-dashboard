require('dotenv').config();
const express = require('express');

const ynabTest = require('./ynab.js');

console.log(ynabTest);

const app = express();

app.get('/', async (req, res) => {
  const budgets = await ynabTest();
  return res.send(budgets);
});

app.listen(3000, () => console.log('App listening on port 3000 here http://localhost:3000'));
