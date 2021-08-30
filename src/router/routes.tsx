import UserItemPage from "../components/UserItemPage";
import { Other } from "../pages/Other";
import { Todos } from "../pages/Todos";
import { Users } from "../pages/Users";

export const routes = [
	{ path: "/users", component: Users, exact: true },
	{ path: "/todos", component: Todos, exact: true },
	{ path: "/other", component: Other, exact: true },
	{ path: "/users/:id", component: UserItemPage, exact: true },
];
