import React from "react";
import Card, { CardVariant } from "./components/Card";

function App() {
	return (
		<div>
			<Card
				width={100}
				height={100}
				variant={CardVariant.outlined}
				onClick={(n) => console.log(n)}
			></Card>
		</div>
	);
}

export default App;
