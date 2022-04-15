import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { UNCATEGORIZED_ID, useBudgetsContextValue } from "../contexts/BudgetsContext";

export default function AddExpenseModal({ show, handleClose, defaultBudgetId }) {

	const descRef = useRef();
	const amountRef = useRef();
	const budgetIdRef = useRef();
	const { addExpense, budgets } = useBudgetsContextValue();

	function handleSubmit(e) {
		addExpense(descRef.current.value, amountRef.current.value, budgetIdRef.current.value);
		handleClose();
	}


	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>New Expense</Modal.Title>
			</Modal.Header>
			<Modal.Body>

				<Form>

					<Form.Group className="mb-3" controlId="description">
						<Form.Label>Description</Form.Label>
						<Form.Control ref={descRef} type="text" placeholder="Enter description"/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="amount">
						<Form.Label>Amount Spent</Form.Label>
						<Form.Control ref={amountRef} type="number" step="1" defaultValue="1" min="0"/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Select Budget</Form.Label>
						<Form.Select ref={budgetIdRef} defaultValue={defaultBudgetId}>
							{
								budgets.map(budget => (
									<option key={budget.id} value={budget.id}>{budget.name}</option>
								))
								
							}
							<option key={UNCATEGORIZED_ID} value={UNCATEGORIZED_ID}>Uncategorized</option>
						</Form.Select>
					</Form.Group>

				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleSubmit}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
  );
}
