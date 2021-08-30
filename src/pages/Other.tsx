import Card, { CardVariant } from "../components/Card";
import EventsExample from "../components/EventsExample";

export const Other = () => {
	return (
		<div>
			<Card
				width={100}
				height={100}
				variant={CardVariant.outlined}
				onClick={(n) => console.log(n)}
			></Card>
			<EventsExample />
		</div>
	);
};
