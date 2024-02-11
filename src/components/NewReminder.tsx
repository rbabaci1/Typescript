import React, { useState } from "react";

interface NewReminderProps {
	onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
	const [title, setTitle] = useState("");

	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();

		onAddReminder(title);
		setTitle("");
	};

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="title"></label>

			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				id="title"
				type="text"
				className="form-control"
				placeholder="Type reminder"
			/>

			<button type="submit" className="btn btn-primary rounder-pill my-3">
				Add Reminder
			</button>
		</form>
	);
}
export default NewReminder;
