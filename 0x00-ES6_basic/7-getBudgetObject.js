export default function getBudgetObject(income, gdp, capita) {
    const budget = {
        income: income,
        gdp: gdp,
        capita: capita,
    };
    budget.income = income;
    budget.gdp = gdp;
    budget.capita = capita;

    return budget;
}