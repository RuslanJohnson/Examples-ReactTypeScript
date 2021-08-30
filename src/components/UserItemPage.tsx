import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

interface UserItemPageParams {
	id: string;
}

const UserItemPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<UserItemPageParams>();
	const history = useHistory();

	useEffect(() => {
		fetchUser();
	}, []);

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>(
				`https://jsonplaceholder.typicode.com/users/${params.id}`
			);

			setUser(response.data);
		} catch (error) {
			alert(error);
		}
	}
	return (
		<div>
			<button onClick={() => history.push("/users")}>Back</button>
			<h1>{user?.name}</h1>
			<h1>{user?.email}</h1>
			<h1>
				{user?.address.city}, {user?.address.street}
			</h1>
		</div>
	);
};

export default UserItemPage;
