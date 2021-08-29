import { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
	todo: ITodo;
}

const UserItem: FC<TodoItemProps> = ({ todo }) => {
	return (
		<div className="todo">
			<input type="checkbox" checked={todo.completed} name={`${todo.id}`} />
			{todo.id} {todo.title}
		</div>
	);
};

export default UserItem;
