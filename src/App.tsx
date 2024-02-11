import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import "./App.css";

function App() {
	const [reminders, setReminders] = useState<Reminder[]>([]);

	async function fetchReminders() {
		const reminders = await reminderService.getRemindes();

		setReminders(reminders);
	}

	useEffect(() => {
		fetchReminders();
	}, []);

	return (
		<div className="App">
			<ReminderList items={reminders} />
		</div>
	);
}

export default App;
