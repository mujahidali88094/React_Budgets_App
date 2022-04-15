export default function BudgetCard({ name, max, current,hideButtons,onAddExpenseClick,onViewExpensesClick }) {
	let progress=0,colorClass="";
	progress = Math.ceil((current / max)*100);
	if (progress <= 50) colorClass = "bg-success";
	else if (progress <= 75) colorClass = "bg-warning";
	else colorClass = "bg-danger";


	
	return (
		<div className="card my-1">
			<div className="card-body">
				<div className="card-title d-flex justify-content-between font-weight-bold align-items-baseline">
					<h5>{name}</h5>
					<div>${current}
					{max &&
						<span className="text-muted">/${max}</span>
					}
					</div>
				</div>
				{max &&
					<div className="progress my-3">
						<div className={"progress-bar " + colorClass} role="progressbar" aria-valuenow={progress}
							aria-valuemin="0" aria-valuemax="100" style={{ width: progress + "%" }}>
						
						</div>
					</div>
				}
				{!hideButtons &&
					<div className="buttons d-flex justify-content-end">
						<div className="btn btn-outline-primary mx-1" onClick={onAddExpenseClick}>Add Expense</div>
						<div className="btn btn-outline-secondary mx-1" onClick={onViewExpensesClick}>View Expenses</div>
					</div>
				}
				
			</div>

		</div>);
}