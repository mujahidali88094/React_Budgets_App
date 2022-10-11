import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";

export const UNCATEGORIZED_ID = "uncategorizedOne";

const budgetsContext = React.createContext();

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function addBudget(name, max) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name))
        return prevBudgets;
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  }
  function addExpense(desc, amount, budgetId) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), desc, amount, budgetId }];
    });
  }
  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function removeBudget(id) {
    console.log("Here");
    console.log("Inside removeBudget with id:" + id);
    setExpenses((prevExpenses) => {
      return prevExpenses.map((expense) => {
        if (expense.budgetId === id)
          return { ...expense, budgetId: UNCATEGORIZED_ID };
        return expense;
      });
    });
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
    console.log(budgets, expenses);
  }
  function removeExpense(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }

  return (
    <budgetsContext.Provider
      value={{
        budgets,
        expenses,
        addExpense,
        addBudget,
        removeExpense,
        removeBudget,
        getBudgetExpenses,
      }}
    >
      {children}
    </budgetsContext.Provider>
  );
};

export function useBudgetsContextValue() {
  return useContext(budgetsContext);
}

/*
Budget{
	id,
	name,
	max
}
Expense{
	id,
	desc,
	amount,
	budgetId
}

*/
