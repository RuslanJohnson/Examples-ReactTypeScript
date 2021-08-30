import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
	user: IUser;
	onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
	return (
		<div className="user" onClick={() => onClick(user)}>
			<strong>
				{user.id}. {user.name}
			</strong>
			<hr />
			<div>
				{user.email} | {user.address.city}, {user.address.street}
			</div>
		</div>
	);
};

export default UserItem;
