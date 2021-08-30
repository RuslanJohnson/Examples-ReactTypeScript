import { useEffect, useState } from "react";
import List from "../components/List";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import { ITodo } from "../types/types";

export const Todos = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	async function fetchTodos() {
		try {
			const response = await axios.get<ITodo[]>(
				"https://jsonplaceholder.typicode.com/todos?_limit=10"
			);

			setTodos(response.data);
		} catch (error) {
			alert(error);
		}
	}

	return (
		<List
			items={todos}
			renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
		/>
	);
};
