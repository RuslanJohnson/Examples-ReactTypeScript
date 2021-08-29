import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
	user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
	return (
		<div className="user">
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
