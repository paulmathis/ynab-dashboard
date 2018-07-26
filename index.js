require('dotenv').config();
const ynab = require('ynab');

const accessToken = process.env.YNAB_KEY;
const ynabAPI = new ynab.API(accessToken);

async function ynabTest() {
  const budgetsResponse = await ynabAPI.budgets.getBudgets();
  const { budgets } = budgetsResponse.data;
  console.log(budgets);
}

ynabTest();
