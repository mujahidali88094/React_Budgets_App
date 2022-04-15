import { Modal, Button,Stack,Card } from 'react-bootstrap';
import { UNCATEGORIZED_ID, useBudgetsContextValue } from '../contexts/BudgetsContext';

export default function ViewBudgetModal({ show, handleClose, budgetId }) {

	const { budgets, getBudgetExpenses, removeExpense, removeBudget } = useBudgetsContextValue();
	if (budgetId === '') return null;
	let budget = {};

	if (budgetId === UNCATEGORIZED_ID)
		budget.name = "Uncategorized";
	else {
		budget = (budgets.filter(b => (b.id === budgetId)))[0];
		if (budget === undefined) return null;
	}
		
	
	const expenses = getBudgetExpenses(budgetId);
	let currentSpending = 0;
	expenses.forEach(expense => currentSpending += parseInt(expense.amount));

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header
				closeButton
				className='d-flex flex-row align-items-center'
			>
				<Modal.Title>Expenses: {budget.name}</Modal.Title>
				{
					budgetId !== UNCATEGORIZED_ID ?
						<Button
							variant='outline-danger'
							size='sm'
							className='ms-2'
							onClick={() => { handleClose(); removeBudget(budgetId); }}
						>
							Delete this Budget
					</Button>
					:
					null
				}
			</Modal.Header>
			<Modal.Body>
				
				<Stack direction='vertical' gap='2'>
					{
						expenses.map(expense => (
							<div
								className='p-1 d-flex flex-row align-items-center'
								key={expense.id}
							>
								<div className='me-auto'>{expense.desc}</div>
								<div className='me-2'>${expense.amount}</div>
								<Button
									variant='outline-danger'
									size='sm'
									onClick={()=>removeExpense(expense.id)}
								>
									&times;
								</Button>
							</div>
						))
					}

				</Stack>
			</Modal.Body>
			<Modal.Footer className='justify-content-between'>
				{budget.max &&
					<Card className='px-3 py-1'>Limit: ${budget.max}</Card>
				}
					<Card className='px-3 py-1'>Amount Spent: ${currentSpending}</Card>
			</Modal.Footer>
		</Modal>
	);
}