import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";
import "./styles/index.css";
import axios from "axios";

function App() {
	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>(
				"https://jsonplaceholder.typicode.com/users"
			);

			setUsers(response.data);
		} catch (error) {
			alert(error);
		}
	}

	return (
		<div>
			<Card
				width={100}
				height={100}
				variant={CardVariant.outlined}
				onClick={(n) => console.log(n)}
			></Card>
			<UserList users={users} />
		</div>
	);
}

export default App;
