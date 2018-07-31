const ynab = require('ynab');

const accessToken = process.env.YNAB_KEY;
const ynabAPI = new ynab.API(accessToken);

class YNAB {
  static async getBudgetId() {
    const budgetsResponse = await ynabAPI.budgets.getBudgets();
    return budgetsResponse.data.budgets[0].id;
  }

  static async getCategories() {
    const id = await this.getBudgetId();
    const categoriesResponse = await ynabAPI.categories.getCategories(id);
    return categoriesResponse.data.category_groups;
  }

  static async getCategoryBalance(categoryId) {
    const budgetId = await this.getBudgetId();
    const categoryResponse = await ynabAPI.categories.getCategoryById(budgetId, categoryId);
    const { balance } = categoryResponse.data.category;
    return this.convertBalance(balance);
  }

  static convertBalance(balance) {
    return `$${balance / 1000}`;
  }
}

module.exports = YNAB;
