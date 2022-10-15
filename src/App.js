function App() {
  const { budgets, expenses, getBudgetExpenses, removeBudget } = useBudgetsContextValue();

  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showViewBudget, setShowViewBudget] = useState(false);
  const [budgetIdForAddExpense, setBudgetIdForAddExpense] = useState("");
  const [budgetIdForViewBudget, setBudgetIdForViewBudget] = useState("");

  let totalBudget = 0;
  budgets.forEach((budget) => (totalBudget += parseInt(budget.max)));
  let totalExpense = 0;
  expenses.forEach((expense) => (totalExpense += parseInt(expense.amount)));
  let uncategorizedExpenses = 0;
  expenses.forEach((expense) => {
    if (expense.budgetId === UNCATEGORIZED_ID)
      uncategorizedExpenses += parseInt(expense.amount);
  });

  return (
    <div className="container text-center mb-5">
      <h1 className="mt-2">React - Every Hook</h1>
      <h2 className="d-flex justify-content-between">
        <div>Budgets</div>
        <div className="buttons d-flex justify-content-end">
          <div
            className="btn btn-primary m-1"
            onClick={() => setShowAddBudget(true)}
          >
            Add Budget
          </div>
          <div
            className="btn btn-outline-primary m-1"
            onClick={() => {
              setBudgetIdForAddExpense(UNCATEGORIZED_ID);
              setShowAddExpense(true);
            }}
          >
            Add Expense
          </div>
          <Button
            variant="outline-danger"
            size="sm"
            className="m-1"
            onClick={() => budgets.forEach((budget) => removeBudget(budget.id))}
          >
            Clear Budgets
          </Button>
        </div>
      </h2>
      {/* <BudgetCard
        name="Entertainment"
        max="1200"
        current="800"
      ></BudgetCard> */}
      {budgets.map((budget) => {
        const expenses = getBudgetExpenses(budget.id);

        let currentSpending = 0;
        expenses.forEach(
          (expense) => (currentSpending += parseInt(expense.amount))
        );
        return (
          <BudgetCard
            key={budget.id}
            name={budget.name}
            max={budget.max}
            current={currentSpending}
            onAddExpenseClick={() => {
              setBudgetIdForAddExpense(budget.id);
              setShowAddExpense(true);
            }}
            onViewExpensesClick={() => {
              setBudgetIdForViewBudget(budget.id);
              setShowViewBudget(true);
            }}
            budgetId={budget.id}
          ></BudgetCard>
        );
      })}

      <BudgetCard
        name="Total"
        max={totalBudget}
        current={totalExpense}
        hideButtons
      ></BudgetCard>
      <BudgetCard
        name="Uncategorized"
        current={uncategorizedExpenses}
        onAddExpenseClick={() => {
          setBudgetIdForAddExpense(UNCATEGORIZED_ID);
          setShowAddExpense(true);
        }}
        onViewExpensesClick={() => {
          setBudgetIdForViewBudget(UNCATEGORIZED_ID);
          setShowViewBudget(true);
        }}
      ></BudgetCard>

      <AddExpenseModal
        show={showAddExpense}
        handleClose={() => setShowAddExpense(false)}
        defaultBudgetId={budgetIdForAddExpense}
      />
      <AddBudgetModal
        show={showAddBudget}
        handleClose={() => setShowAddBudget(false)}
      />
      <ViewBudgetModal
        show={showViewBudget}
        handleClose={() => setShowViewBudget(false)}
        budgetId={budgetIdForViewBudget}
      />
    </div>
  );
}

export default App;
