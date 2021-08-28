import { FC, useState } from "react";

export enum CardVariant {
	filled = "filled",
	outlined = "outlined",
}

interface CardProps {
	width: number;
	height: number;
	variant: CardVariant;
	onClick: (n: number) => void;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
	const [n] = useState(0);

	return (
		<div
			style={{
				width: width,
				height: height,
				backgroundColor: variant === CardVariant.filled ? "red" : "",
				border: variant === CardVariant.outlined ? "1px solid black" : "none",
			}}
			onClick={() => onClick(n)}
		>
			{children}
		</div>
	);
};

export default Card;
