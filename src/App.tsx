import { BrowserRouter, NavLink } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/index.css";

function App() {
	return (
		<BrowserRouter>
			<div className="navbar">
				<NavLink to="/users">Users</NavLink>
				<NavLink to="/todos">Todos</NavLink>
			</div>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
