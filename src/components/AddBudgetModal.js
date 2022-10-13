import { Modal, Button, Form } from "react-bootstrap";
import {useRef } from "react";
import { useBudgetsContextValue } from "../contexts/BudgetsContext";

export default function AddBudgetModal({ show, handleClose }) {

	const nameRef = useRef();
	const maxRef = useRef();
	const { addBudget } = useBudgetsContextValue();

	function handleSubmit(e) {
		addBudget(nameRef.current.value, maxRef.current.value);
		handleClose();
	}


	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Budget</Modal.Title>
			</Modal.Header>
			<Modal.Body>

				<Form>

					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control ref={nameRef} type="text" placeholder="Enter name"/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="max">
						<Form.Label>Budget Amount</Form.Label>
            <div className="dollar-prefix">$</div>
            <Form.Control className='dollar-input' ref={maxRef} type="number" step="10" defaultValue="100" min="0"/>
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
