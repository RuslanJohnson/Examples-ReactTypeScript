import React, { useRef, useState } from "react";

const EventsExample = () => {
	const [value, setValue] = useState<string>("");
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log("Controlled: " + value);
		console.log("Uncontrolled: " + inputRef.current?.value);
	};

	const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
		setIsDrag(true);
	};

	const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
		setIsDrag(false);
	};

	return (
		<div>
			<input
				type="text"
				value={value}
				placeholder="controled"
				onChange={changeHandler}
			/>
			<input ref={inputRef} type="text" placeholder="uncontroled" />
			<button onClick={clickHandler}>Click me</button>
			<div
				draggable
				style={{ width: 100, height: 100, backgroundColor: "blue" }}
			></div>
			<div
				onDragOver={dragOverHandler}
				onDragLeave={dragLeaveHandler}
				style={{
					width: 100,
					height: 100,
					backgroundColor: isDrag ? "red" : "blue",
					marginTop: 15,
				}}
			></div>
		</div>
	);
};

export default EventsExample;
