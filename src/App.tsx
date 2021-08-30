import { BrowserRouter, NavLink } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/index.css";
import styled from "styled-components";

function App() {
	const Navbar = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		background-color: #3b52d8;
	`;

	const StyledNavLink = styled(NavLink)`
		color: #fff;
		text-decoration: none;
		margin: 15px;
	`;

	return (
		<BrowserRouter>
			<Navbar>
				<StyledNavLink to="/users">Users</StyledNavLink>
				<StyledNavLink to="/todos">Todos</StyledNavLink>
			</Navbar>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
