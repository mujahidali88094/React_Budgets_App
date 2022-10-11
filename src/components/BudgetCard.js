import { Modal, Button, Stack, Card } from "react-bootstrap";
import {
  UNCATEGORIZED_ID,
  useBudgetsContextValue,
} from "../contexts/BudgetsContext";

export default function BudgetCard({
  name,
  max,
  current,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
  budgetId,
}) {
  let progress = 0,
    colorClass = "";
  if (max != undefined && max != null && max != 0) {
    progress = Math.ceil((current / max) * 100);
    if (progress <= 50) colorClass = "bg-success";
    else if (progress <= 75) colorClass = "bg-warning";
    else colorClass = "bg-danger";
  }

  const { removeBudget } = useBudgetsContextValue();

  return (
    <div className="card my-1">
      <div className="card-body">
        <div className="card-title d-flex justify-content-between font-weight-bold align-items-baseline">
          <h5>{name}</h5>
          <div>
            ${current}
            {max != undefined && max != null && (
              <span className="text-muted">/${max}</span>
            )}
          </div>
        </div>
        {max != undefined && max != null && (
          <div className="progress my-3">
            <div
              className={"progress-bar " + colorClass}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            ></div>
          </div>
        )}
        {!hideButtons && (
          <div className="buttons d-flex justify-content-end">
            <div
              className="btn btn-outline-primary mx-1"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </div>
            <div
              className="btn btn-outline-secondary mx-1"
              onClick={onViewExpensesClick}
            >
              View Expenses
            </div>
            {name != "Uncategorized" && budgetId !== UNCATEGORIZED_ID ? (
              <Button
                variant="outline-danger"
                size="sm"
                className="ms-2"
                onClick={() => {
                  removeBudget(budgetId);
                }}
              >
                Delete this Budget
              </Button>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
