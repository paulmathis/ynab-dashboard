const ynab = require('ynab');

const accessToken = process.env.YNAB_KEY;
const ynabAPI = new ynab.API(accessToken);

async function ynabTest() {
  try {
    const budgetsResponse = await ynabAPI.budgets.getBudgets();
    const { budgets } = budgetsResponse.data;
    return budgets;
  } catch (e) {
    return e;
  }
}

module.exports = ynabTest;
