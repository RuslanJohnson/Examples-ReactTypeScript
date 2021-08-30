import { useState, useEffect } from "react";
import List from "../components/List";
import axios from "axios";
import UserItem from "../components/UserItem";
import { IUser } from "../types/types";
import { useHistory } from "react-router-dom";

export const Users = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const history = useHistory();

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
		<List
			items={users}
			renderItem={(user: IUser) => (
				<UserItem
					onClick={(user) => history.push(`/users/${user.id}`)}
					user={user}
					key={user.id}
				/>
			)}
		/>
	);
};
